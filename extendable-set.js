
class ExtendableSet extends Set{
	constructor(parent){
		super();
		if(parent && parent instanceof ExtendableSet){
			this._parent = parent;
		}
	}
	
	has(key, own){
		let result = super.has(key);
		if(!result && !own && this._parent){
			result = this._parent.has(key);
		}
		return result;
	}
	
}

module.exports = ExtendableSet;