export function formatCaughtStats(caughtStats: any, allStat: any, allClass: any) {
  const newCaughtStats: any = [];
  caughtStats.forEach((item: any) => {
    if (allStat[item.stat]) {
      newCaughtStats.push(Object.assign({ isEntry: true }, allStat[item.stat]));
    } else {
      newCaughtStats.push(Object.assign({ ext: item.ext }, dealCaughtStats(item, allClass)));
    }
  });
  return newCaughtStats;
}

function dealCaughtStats(statObj: any, allClass: any) {
  const [l1code, l2code, l3code, envcode] = statObj.stat.split('.');

  const newStatObj: any = {
    event_code: statObj.stat,
    event_desc: '',
  };
  const needAddClass: any = {};
  const l1 = allClass.level1.find((item: any) => item.code === l1code);
  if (l1) {
    newStatObj.first_level_id = l1.id;
    newStatObj.first_level_name = l1.name;
    newStatObj.event_desc = l1.name;
    const l2 = allClass.level2.find((item: any) => (item.father_id === l1.id && item.code === l2code));
    if (l2) {
      newStatObj.second_level_id = l2.id;
      newStatObj.second_level_name = l2.name;
      newStatObj.event_desc += '.' + l2.name;
      const l3 = allClass.level3.find((item: any) => (item.father_id === l2.id && item.code === l3code));
      if (l3) {
        newStatObj.third_level_id = l3.id;
        newStatObj.third_level_name = l3.name;
        newStatObj.event_desc += '.' + l3.name;
      } else {
        needAddClass.third_level_code = l3code;
      }
    } else {
      needAddClass.second_level_code = l2code;
    }
  } else {
    needAddClass.first_level_code = l1code;
  }
  return newStatObj;
}