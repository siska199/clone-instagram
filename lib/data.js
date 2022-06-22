import { faker } from '@faker-js/faker'

export const dataStories = [...Array(20)].map((_, i) => ({
  id: i,
  username:
    i % 2 == 0 ? faker.name.firstName('female') : faker.name.firstName('male'),
  name:
    i % 2 == 0 ? faker.name.firstName('female') : faker.name.firstName('male'),
  url: faker.image.avatar(true),
}))

export const dataSuggests = [...Array(5)].map((_, i) => ({
  id: i,
  username:
    i % 2 == 0 ? faker.name.firstName('female') : faker.name.firstName('male'),
  url: faker.image.avatar(true),
  info: 'Follow by siska_ar + 3 more',
}))

export const dataVideosStory = [
  {
    url: 'story0.mp4',
    duration: '29s',
  },
  {
    url: 'story1.mp4',
    duration: '27s',
  },
  {
    url: 'story2.mp4',
    duration: '32s',
  },
]
