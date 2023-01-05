exports.getdate=function()
{
const date=new Date();
const options={
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"};
  return date.toLocaleDateString("en-US",options);
}
exports.getday=function()
{
const date=new Date();
const options={
  weekday:"long",
};
  return date.toLocaleDateString("en-US",options);
}
