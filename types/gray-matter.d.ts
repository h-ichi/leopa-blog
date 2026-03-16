declare module "gray-matter" {
  interface GrayMatterFile<T> {
    content: string
    data: T
    excerpt?: string
  }

  function grayMatter<T>(input: string): GrayMatterFile<T>

  export = grayMatter
}