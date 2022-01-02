const clock=document.querySelector('div.clock')
const twoDigts=(element) =>{
  if(element<10){
      return ('0'+element) 
  }else{
      return (element)
  }
}
const updateTime=() =>{
    const timeDate=new Date()
    const hours=timeDate.getHours()
    const minutes=timeDate.getMinutes()
    const seconds=timeDate.getSeconds()
    const elementClock=`
    <span> ${twoDigts(hours)}</span> :
    <span> ${twoDigts(minutes)}</span> :
    <span> ${twoDigts(seconds)} </span>
    `
    clock.innerHTML=elementClock
}
setInterval(updateTime,1000)