// const envelope1 = {
//     a: 55,
//     b: 55
// };

// const envelope2 = {
//     c: 70,
//     d: 55    
// }

function checkNestingEnvelope(env1, env2) {
    const valuesEnv1 = Object.values(env1);
    const valuesEnv2 = Object.values(env2);
    const maxValueEnv1 = Math.max(...valuesEnv1);
    const maxValueEnv2 = Math.max(...valuesEnv2);
    const minValueEnv1 = Math.min(...valuesEnv1);
    const minValueEnv2 = Math.min(...valuesEnv2);
    if (maxValueEnv1 > maxValueEnv2 && minValueEnv1 > minValueEnv2) {
        return 2;
    }
    if (maxValueEnv2 > maxValueEnv1 && minValueEnv2 > minValueEnv1) {
        return 1;
    } else {
        return 0;
    }

};

function checkValueNestingEnvelope(env1, env2) {
    const allValues = Object.values(env1).concat(Object.values(env2));
    let errorMessage = {
        status: "failed",
        reason: "Check your values. it must be: float, >0 , <100000."
    };
    for (let item of allValues) {
        if (isNaN(item) || item <= 0 || item > 1000000) {
            return errorMessage;
        }
    }
    return checkNestingEnvelope(env1, env2);
}

export { checkValueNestingEnvelope };
// console.log(checkValue (envelope1, envelope2));