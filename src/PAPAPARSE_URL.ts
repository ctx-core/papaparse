import { papaparse_version_ } from './papaparse_version_.js'
export const PAPAPARSE_URL =
	process.env.PAPAPARSE_URL
	|| `https://cdnjs.cloudflare.com/ajax/libs/PapaParse/${papaparse_version_()}/papaparse.js`
