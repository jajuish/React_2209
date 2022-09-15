interface Child {
	key: string,
	optionalKey?: number[]
}

export interface Parent {
	someKey: number,
	aNestedObject: Child,
	anotherNestedObject: {
		param?: () => Date,
		nested?: {}[]
	}
}

const obj: Parent = {
	someKey: 1,
	aNestedObject: {
		key: "",
		optionalKey: [4,2,0]
	},
	anotherNestedObject: {}
}