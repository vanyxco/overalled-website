"use client";

import Image from "next/image";
import { startTransition, useCallback, useEffect, useId, useRef, useState } from "react";
import type { WorkPhoto, WorkPost } from "@/lib/site";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WashReveal } from "@/components/wash-reveal";

const FEED_PAGE_SIZE = 4;
const CAPTION_LIMIT = 180;
const THUMB_COUNT = 4;

export function WorkFeed({
  posts,
  variant = "feed",
}: {
  posts: WorkPost[];
  variant?: "home" | "feed";
}) {
  const [visibleCount, setVisibleCount] = useState(
    variant === "home" ? posts.length : Math.min(FEED_PAGE_SIZE, posts.length),
  );
  const [open, setOpen] = useState<{ post: number; photo: number } | null>(
    null,
  );

  const visible = posts.slice(0, visibleCount);
  const remaining = posts.length - visibleCount;
  const openPost = open ? posts[open.post] : undefined;
  const openPhotos = openPost?.photos ?? [];

  return (
    <>
      {variant === "feed" ? <FeedHeader /> : null}
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {posts.length} posts
      </p>
      <ol
        className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
      >
        {visible.map((post, postIndex) => (
          <li key={post.id}>
            <WorkPostCard
              post={post}
              priority={postIndex < 2}
              showThumbs={variant === "feed"}
              sizes="(min-width: 768px) 50vw, 100vw"
              onOpen={(photoIndex) =>
                setOpen({ post: postIndex, photo: photoIndex })
              }
            />
          </li>
        ))}
      </ol>
      {variant === "feed" && remaining > 0 ? (
        <div className="mt-14">
          <button
            type="button"
            className="btn label min-h-11 border border-navy px-8 py-4 text-navy transition-colors hover:bg-navy hover:text-white"
            onClick={() => {
              startTransition(() => {
                setVisibleCount((count) =>
                  Math.min(count + FEED_PAGE_SIZE, posts.length),
                );
              });
            }}
          >
            Load more
          </button>
          <p className="mt-4 text-mute">
            {remaining} older {remaining === 1 ? "post" : "posts"}
          </p>
        </div>
      ) : null}
      {open && openPost ? (
        <WorkLightbox
          post={openPost}
          photos={openPhotos}
          index={open.photo}
          onIndex={(photo) => setOpen({ post: open.post, photo })}
          onClose={() => setOpen(null)}
        />
      ) : null}
    </>
  );
}

function FeedHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-b border-line pb-8">
      <div className="flex items-center gap-4">
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={56}
          height={56}
          className="size-14 rounded-full object-contain"
        />
        <div>
          <p className="font-medium text-navy">{site.legalName}</p>
          <p className="mt-1 text-mute">
            {site.followers} followers · {site.reviewCount} reviews ·{" "}
            {site.recommend} recommend
          </p>
        </div>
      </div>
      <a
        href={site.facebook}
        className="btn label inline-flex min-h-11 items-center bg-blue px-8 py-4 text-white transition-colors hover:bg-navy-2"
      >
        Follow on Facebook
      </a>
    </div>
  );
}

function WorkPostCard({
  post,
  priority,
  showThumbs,
  sizes,
  onOpen,
}: {
  post: WorkPost;
  priority: boolean;
  showThumbs: boolean;
  sizes: string;
  onOpen: (photoIndex: number) => void;
}) {
  const cover = post.photos[0];
  if (!cover) return null;

  const extras = post.photos.slice(1, 1 + THUMB_COUNT);
  const overflow = post.photos.length - 1 - extras.length;

  return (
    <article>
      <header className="flex items-center gap-4">
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full object-contain"
        />
        <div>
          <p className="font-medium text-navy">{site.legalName}</p>
          <p className="text-mute">{post.dateLabel}</p>
        </div>
      </header>
      <figure className="mt-5">
        <button
          type="button"
          onClick={() => onOpen(0)}
          className="group relative block aspect-4/3 w-full overflow-hidden rounded-xl bg-canvas text-left"
          aria-label={`View photo: ${cover.alt}`}
        >
          <WashReveal fill>
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes={sizes}
              className={cn(
                "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
                cover.objectClass,
              )}
              priority={priority}
            />
          </WashReveal>
        </button>
        {showThumbs && extras.length > 0 ? (
          <ul
            className={cn(
              "mt-2 grid gap-2",
              extras.length >= 4
                ? "grid-cols-4"
                : extras.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2",
            )}
          >
            {extras.map((photo, index) => {
              const photoIndex = index + 1;
              const isLast = index === extras.length - 1 && overflow > 0;
              return (
                <li key={photo.src}>
                  <button
                    type="button"
                    onClick={() => onOpen(photoIndex)}
                    className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-canvas"
                    aria-label={
                      isLast
                        ? `View photo: ${photo.alt}. ${overflow} more photos`
                        : `View photo: ${photo.alt}`
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="160px"
                      className={cn("object-cover", photo.objectClass)}
                    />
                    {isLast ? (
                      <span
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center bg-navy/70 label text-white"
                      >
                        +{overflow}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
        <figcaption className="mt-5 max-w-2xl">
          {post.photos.length > 1 ? (
            <p className="label text-mute">{post.photos.length} photos</p>
          ) : null}
          <PostCaption caption={post.caption} />
          <a href={post.href} className="nav-link label mt-4 inline-block text-orange">
            View on Facebook
          </a>
        </figcaption>
      </figure>
    </article>
  );
}

function PostCaption({ caption }: { caption: string }) {
  const [expanded, setExpanded] = useState(false);
  const long = caption.length > CAPTION_LIMIT;
  const shown =
    !long || expanded ? caption : `${caption.slice(0, CAPTION_LIMIT).trim()}…`;

  return (
    <div className="mt-3">
      <p className="leading-relaxed text-ink">{shown}</p>
      {long ? (
        <button
          type="button"
          className="label mt-2 min-h-11 text-orange"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      ) : null}
    </div>
  );
}

function WorkLightbox({
  post,
  photos,
  index,
  onIndex,
  onClose,
}: {
  post: WorkPost;
  photos: WorkPhoto[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const photo = photos[index];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const go = useCallback(
    (direction: -1 | 1) => {
      onIndex((index + direction + photos.length) % photos.length);
    },
    [index, onIndex, photos.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!photo) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="work-lightbox"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex min-h-full flex-col bg-navy text-white">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
          <p id={titleId} className="label text-white/90">
            {index + 1} of {photos.length}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {photos.length > 1 ? (
              <>
                <button
                  type="button"
                  className="label min-h-11 text-white/90 hover:text-white"
                  onClick={() => go(-1)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="label min-h-11 text-white/90 hover:text-white"
                  onClick={() => go(1)}
                >
                  Next
                </button>
              </>
            ) : null}
            <button
              ref={closeRef}
              type="button"
              className="label min-h-11 text-orange-hot hover:text-white"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-6xl flex-1 px-5 md:px-8">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-navy-2 md:aspect-16/10">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-5 max-w-3xl leading-relaxed text-white/90">
            {post.caption}
          </p>
          <a
            href={photo.href}
            className="nav-link label mt-4 mb-10 inline-block text-orange-hot"
          >
            View on Facebook
          </a>
        </div>
      </div>
    </dialog>
  );
}
