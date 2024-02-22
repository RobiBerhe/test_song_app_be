///
/// an easy to use validation library.
///



const isString = (errMsg) => {
    return (prop) => {
        if (!prop || prop == '') return errMsg;
        return true;
    }
}

const min = (minLength,errMsg) => {
    return (prop) => {
        if (!prop) return errMsg;
        if (isString(prop)) {
            if (prop.length < minLength) return errMsg;
        }
        return true;
    }
}


const max = (maxLength, errMsg) => {
    return (prop) => {
        if (!prop) return errMsg;
        if (isString(prop)) {
            if (prop.length > maxLength) return errMsg;
        }
        return true;
    }
}

//we'll add the remaining validators here....


const validators = {
    isString,
    max,
    min
};


const Validator = (schema, data) => {
    const errs = [];
    if(!schema || !data ) throw new Error("invalid schema format!");
    return {
        validate: () => {
            const schemaKey = Object.keys(schema);
            schemaKey.forEach((k) => {
                if (data[k] != undefined) {
                    const res = schema[k];
                    if (!Array.isArray(res)) throw new Error("invalid schema format!");

                    res.forEach((f) => {
                        const hasErrs = f(data[k]);
                        if(hasErrs != true) errs.push(hasErrs)
                    })
                }
                else {
                    errs.push(`${k} is not provided`)
                }
            })
            return errs;
        }


    }

}


module.exports = { Validator, validators };