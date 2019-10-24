
console.log(`
    The {} is: ${{} ? "truthy" : "falsy"}
    The [] is: ${[] ? "truthy" : "falsy"}
    The 0 is: ${0 ? "truthy" : "falsy"}
    The 100 is: ${100 ? "truthy" : "falsy"}
    The 0n is: ${0n ? "truthy" : "falsy"}
    The 100n is: ${100n ? "truthy" : "falsy"}
    The false is: ${false ? "truthy" : "falsy"}
    The true is: ${true ? "truthy" : "falsy"}
    The "" is: ${"" ? "truthy" : "falsy"}
    The '' is: ${'' ? "truthy" : "falsy"}
    The \`\` is: ${`` ? "truthy" : "falsy"}
    The "word" is: ${"word" ? "truthy" : "falsy"}
    The null is: ${null ? "truthy" : "falsy"}
    The undefined is: ${undefined ? "truthy" : "falsy"}
    The NaN is: ${NaN ? "truthy" : "falsy"}
`)