export default class xUtilGuid {
	static get(): string {
		return xUtilGuid.s4() + xUtilGuid.s4() + '-' + xUtilGuid.s4() + '-' + xUtilGuid.s4() + '-' +
		xUtilGuid.s4() + '-' + xUtilGuid.s4() + xUtilGuid.s4() + xUtilGuid.s4();
	}

	static s4(): string {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
}