// Shared church details used across pages. The copy doc asks that times, leaders and testimonials
// stay unpublished until PGC confirms them: leave a value as `null` and the site hides it.

// TODO(PGC): confirm official times, e.g. '10:00AM'.
export const times = {
  sunday: null as string | null,
  bibleStudy: null as string | null,
}

export const location = 'Lagos, Nigeria'

const withTime = (label: string, time: string | null) => (time ? `${label} · ${time}` : label)

export const sundayGathering = withTime('Sunday Gathering', times.sunday)
export const bibleStudy = withTime('Wednesday Bible Study', times.bibleStudy)

export const youtubeUrl = 'https://www.youtube.com/'

// Pillar scripture references, kept in one place so Home and About agree.
// TODO(PGC): the copy doc asks to confirm each pairing and the preferred translation.
export const pillarRefs = {
  followChrist: 'Matthew 28:19',
  fellowship: 'Psalm 133:1',
  fulfillPurpose: 'Jeremiah 1:5',
  haveFun: 'Psalm 16:11',
}

export type Leader = { role: string; name: string; bio: string; photo?: string }

// TODO(PGC): add approved names and 50–80 word bios. The section stays hidden while this is empty.
export const leaders: Leader[] = []

export type Testimony = { quote: string; attribution: string }

// TODO(PGC): add only approved, authentic testimonies. The section stays hidden while this is empty.
export const testimonies: Testimony[] = []
