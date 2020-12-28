import { _papaparse_version } from './_papaparse_version'
export const PAPAPARSE__URL =
	process.env.PAPAPARSE__URL
	|| `https://cdnjs.cloudflare.com/ajax/libs/PapaParse/${_papaparse_version()}/papaparse.js`
