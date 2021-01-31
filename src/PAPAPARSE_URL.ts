import { _papaparse_version } from './_papaparse_version'
export const PAPAPARSE_URL =
	process.env.PAPAPARSE_URL
	|| `https://cdnjs.cloudflare.com/ajax/libs/PapaParse/${_papaparse_version()}/papaparse.js`
