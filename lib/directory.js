// Extracts language and subject based on the directory path of the [slug].tsx file
export function getFromDirPath(dirPath, what) {
    if (what === 'lang') {
        let counter = 0
        for (let i = dirPath.length - 1; i > 0; i--) {
            if (dirPath[i] === '\\') {
                if (counter === 2) {
                    // The languages are all supposed to be in a two-digit code, hence the hardcoded '3' in there
                    return dirPath.substring(i, i + 3)
                }
                counter++
            }
        }
    } else if (what === 'subject') {
        let counter = 0
        for (let i = dirPath.length - 1; i > 0; i--) {
            if (dirPath[i] === '\\') {
                if (counter === 1) {
                    // The folder structure is not expected to change, that's why the '6' is harcoded there
                    // If the [slug].tsx file is ever to be placed somewhere else, change this number accordingly
                    return dirPath.substring(i, dirPath.length - 6)
                }
                counter++
            }
        }
    }

}