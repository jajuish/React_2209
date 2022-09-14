interface Child {
	key: string
	param?: number
}

export interface Parent {
	thisIsANestedObject: Child
	thisIsAnotherNestedOne: {
		key: string
		param?: number
	}
}

const obj: Parent = {
	thisIsANestedObject: {
		key: "string",
	},
	thisIsAnotherNestedOne: {
		key: "anotherstring"
	}
}
