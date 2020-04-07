class ExtendableMap extends Map{
	constructor(parent){
		super();
		if(parent && parent instanceof ExtendableMap){
			this._parent = parent;
		}
	}
	
	get(key, own){
		if(ExtendableMap.prototype.has.call(this, key, true)){
			return super.get(key);
		}
		else if(this._parent && !own){
			return this._parent.get(key);
		}
	}
	
	has(key, own){
		let result = super.has(key);
		if(this._parent && !result && !own){
			result = this._parent.has(key);
		}
		return result;
	}
}

module.exports = ExtendableMap;