(async function(){
    await (async () => new Promise(resolve => setTimeout(resolve, 3000)))();
    console.log('waited 3 secs');
})();

