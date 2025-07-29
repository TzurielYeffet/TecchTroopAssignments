function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

let promiseArr = files.map((item) => processFile(item.name, item.time));
Promise.all(promiseArr)
  .then((res) => console.log("All files proccesed"))
  .catch((err) => console.log(err));
// TODO:
// 1. Create an array of promises using the files array
// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails
// processFile()

// Bonus: Try Promise.allSettled() to see results even if some files fail
Promise.allSettled(promiseArr).then(res =>{
    console.log("All file proccessed even if some faild");
    res.forEach((result,index)=>{
        if(result.status === "fulfilled"){
            console.log(`${files[index].name} success`,result.value);   
        }else{
            console.log(`${files[index].name} failed`,result.value);
            
        }
    } )
    
})