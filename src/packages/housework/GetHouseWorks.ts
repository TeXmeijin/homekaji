export type Housework = {
  id: string
  name: string
  point: number
}

export const GetHouseWorks: () => Promise<Housework[]> = async () => {
  await new Promise((resolve) => {
    resolve()
  })
  return [
    {
      id: 'hoge',
      name: '皿洗い',
      point: 9,
    },
  ]
}
