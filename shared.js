/* Shared settings and schedule rules; no account credentials are handled. */
(function(root){
const defaults={reels:true,explore:true,suggested:true,stories:false,feed:false,comments:false,saved:false,messagesOnly:false,enabled:true,dailyLimit:30,sessionMinutes:10,downtimeEnabled:false,downtimeStart:'22:00',downtimeEnd:'07:00',downtimeDays:[0,1,2,3,4,5,6],focusUntil:0};
function localDate(now=new Date()){return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`}
function inDowntime(s,now=new Date()){if(!s.downtimeEnabled)return false;const m=now.getHours()*60+now.getMinutes();const num=x=>{const [h,m]=x.split(':').map(Number);return h*60+m};const a=num(s.downtimeStart),b=num(s.downtimeEnd);if(a===b)return s.downtimeDays.includes(now.getDay());if(a<b)return s.downtimeDays.includes(now.getDay())&&m>=a&&m<b;return (m>=a&&s.downtimeDays.includes(now.getDay()))||(m<b&&s.downtimeDays.includes((now.getDay()+6)%7))}
root.Calm={defaults,localDate,inDowntime};
})(globalThis);
