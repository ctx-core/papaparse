import { import_meta_env_ } from 'ctx-core/env'
import { papaparse_version_ } from '../papaparse_version_/index.js'
export const PAPAPARSE_URL =
	import_meta_env_().PAPAPARSE_URL
	|| `https://cdnjs.cloudflare.com/ajax/libs/PapaParse/${papaparse_version_()}/papaparse.js`
