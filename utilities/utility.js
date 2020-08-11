export const RefactorData = (data)=>{
   let updateddata =  data.map((obj)=>{
        let usefulData = {
          mission_name:obj.mission_name+"#"+obj.flight_number,
          mission_patch:obj.links.mission_patch_small/*serialize(React.createElement("img", {
            src: obj.links.mission_patch_small,
         }, null))*/,
          mission_id:obj.mission_id,
          launch_year:obj.launch_year,
          launch_success:obj.launch_success,
          land_success:obj.rocket.first_stage.cores[0].land_success
      }
      return usefulData
      });
      return updateddata;
}
export const generateQueryString = (filters)=>{
  const urlParams = ["launch_year","launch_success","land_success"]
  let paramsString = ''
  Object.keys(filters).map((key,i)=>{
    if(filters[key]){
      paramsString+=`&${urlParams[i]}=${filters[key].toLowerCase()}`;
    }
  });
  return paramsString;
}