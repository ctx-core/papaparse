import { package_version_ } from '@ctx-core/package'
export async function papaparse_version_():Promise<string> {
	return package_version_('papaparse')
}
export {
	papaparse_version_ as _papaparse_version,
	papaparse_version_ as _version__papaparse,
}
