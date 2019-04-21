import icon from './icon'

const File = {
    item (data) {
        return {
          img: data.kMDItemContentType.includes('folder') ? icon.folder() : icon.file(data.kMDItemFSName),
          name: data.kMDItemFSName,
          path: data.path
        }
      },
      sort (keyword, data) {
        keyword = keyword.toLowerCase()
        let top = []
        let end = []
        for (const item of data) {
          const name = item.name.toLowerCase()
          if (name === keyword) {
            top.unshift(item)
          } else if (name.includes(keyword)) {
            top.push(item)
          } else {
            end.push(item)
          }
        }
        return [...top, ...end]
      }
}

export default File
