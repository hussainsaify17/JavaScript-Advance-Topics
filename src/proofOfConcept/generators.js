export default {
    generatorFn: function* () {

    },
    runnerFn: function* (genFn) {
        const itr = genFn();
        function run(args) {
            const result = itr.next(args);
            if (result.done) {
                return result.value;
            }
            else {
                return Promise.resolve(result.value).then(run)
            }
        }
        yield run();
    }
}