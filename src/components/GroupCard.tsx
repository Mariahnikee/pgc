import { Button, ImageSlot, Pill } from './ui'

export type GroupPhoto = { src: string; imageClass: string; placeholder: string }

export const groupPhotos = {
  sistahs: {
    src: '/images/sistahs-connect.jpg',
    imageClass: 'object-[50%_55%] saturate-[1.7] hue-rotate-[-14deg]',
    placeholder: 'linear-gradient(160deg, #3a2a9a 0%, #8a4a7a 45%, #4a2a3a 100%)',
  },
  brotherhood: {
    src: '/images/brotherhood.jpg',
    imageClass: 'object-[50%_45%] saturate-[1.7] hue-rotate-[-14deg]',
    placeholder: 'linear-gradient(160deg, #3a1fd0 0%, #6a2ab0 50%, #3a1a5a 100%)',
  },
} satisfies Record<string, GroupPhoto>

/** Photo card with a pill tag, title, blurb and a peach call-to-action (home groups, Get Involved teams). */
export default function GroupCard({
  title,
  body,
  photo,
  tag,
  cta,
  href,
}: {
  title: string
  body: string
  photo: GroupPhoto
  tag: string
  cta: string
  href: string
}) {
  return (
    <article className="relative h-[347px] overflow-hidden">
      <ImageSlot
        src={photo.src}
        alt={`${title} photo`}
        placeholder={photo.placeholder}
        className={`absolute inset-0 ${photo.imageClass}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/85" />
      <div className="absolute inset-x-0 bottom-0 px-[30px] pb-[30px]">
        <Pill>{tag}</Pill>
        <h3 className="mt-3 font-serif text-[22px] leading-tight text-cream">{title}</h3>
        <p className="mt-2 max-w-[300px] text-[10px] leading-[1.6] text-cream/60">{body}</p>
        <Button variant="peach" href={href} className="mt-4 px-[18px] py-2.5 text-[9px]">
          {cta}
        </Button>
      </div>
    </article>
  )
}
