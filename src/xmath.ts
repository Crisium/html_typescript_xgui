export default class xMath {

	static deg2rad(deg: number): number {
		return deg * (Math.PI / 180);
	}

	static rad2deg(rad: number): number {
		return rad * (180 / Math.PI);
	}
}