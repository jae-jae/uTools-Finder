import icon from './icon'

const File = {
    item (data) {
        return {
          img: data.kMDItemContentType.includes('folder') ? icon.folder() : icon.file(data.kMDItemFSName),
          name: data.kMDItemFSName,
          path: data.path
        }
      }
}

export default File
