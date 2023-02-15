// import request from '../libs/request';
import axios from 'axios';
export async function getSettings() {
  const url = 'cgi-bin/get-settings';
  return await axios.get(url);
}

export async function getReports() {
  const url = 'cgi-bin/get-reports';
  const res = await axios.get(url);
  return res.data;
}

export async function queryReportmanage() {
  const url = 'cgi-bin/query-reportmanage';
  const res = await axios.get(url);
  return formatStat(res.data.result.data);
}

export async function queryClass() {
  const url = 'cgi-bin/query-class';
  const res = await axios.get(url);
  return formatClass(res.data.result.data);
}

export async function addStat(data: any) {
  const url = `cgi-bin/add-stat`;
  return await axios.get(url);
}

export async function addRule(data: any) {
  const url = `cgi-bin/add-rule`;
  return await axios.get(url);
}

export async function addSubgroup(params: any) {
  const url = `cgi-bin/add-subgroup`;
  return await axios.get(url, {
    params
  });
}

function formatStat(stats: any) {
  const statsObj: any = {};
  stats.forEach((stat: any) => {
    statsObj[stat.event_code] = stat;
  });
  return statsObj;
}

function formatClass(classList: any) {
  const newClass: any = {
    'level1': [],
    'level2': [],
    'level3': []
  };
  classList.forEach((item: any) => {
    if (item.level === 3) {
      newClass['level3'].push(item);
    } else if (item.level === 2) {
      newClass['level2'].push(item);
    } else if (item.level === 1) {
      newClass['level1'].push(item);
    }
  });
  return newClass;
}