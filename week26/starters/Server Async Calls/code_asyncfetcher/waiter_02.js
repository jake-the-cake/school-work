async function task(counter) {
   return new Promise((resolve) => setTimeout(() => resolve(counter), 3000));
}

(async function(){
    for (var i = 0; i < 5; i++) {
        const result = await task(i);
        console.log(result);
    }
})();
