
let statObj = {};

function showMessage(msg, success) {
  var tips = $("#tips");
  tips.text(msg);
  if (success) {
    tips.addClass("success");
  } else {
    tips.removeClass("success");
  }
  tips.stop(true, true).show();
  tips.css("marginLeft", -tips[0].offsetWidth / 2);
  tips.delay(2000).fadeOut(1600);
}
function initUI(data) {
  $("#root").show();
  if (data.active) {
    $("#active")[0].checked = true;
  }

  var pendingActive;
  $("#active").on("change", ({ target }) => {
    var { checked } = target;
    if (pendingActive) {
      target.checked = !checked;
      return;
    }
    pendingActive = true;
    $.post({
      url: "cgi-bin/active",
      dataType: "json",
      data: { active: checked ? 1 : 0 },
      success: function () {
        pendingActive = false;
        showMessage((checked ? "启用" : "关闭") + "成功", true);
      },
      error: function () {
        target.checked = !checked;
        pendingActive = false;
        showMessage("提交失败，请稍后重试！");
      },
    });
  });
  $('#statList').on('click', 'li', ({ target }) => {
    // console.log('statList li click', target);
    const key = target.dataset.stat;
    const data = statObj[key];
    $('#statData').html(data.ext);
  });
}

function renderBI(data) {
  let list = data.statArr;
  list.forEach(item => {
    if (item.stat) {
      statObj[item.stat] = item;
    }
  });
  let html = [];
  for (key in statObj) {
    html.push(getListHtml(statObj[key]));
  }
  html = html.join('');
  $('#statList').html(html);
}

function getListHtml(stat) {
  return '<li data-stat="' + stat.stat + '">' + stat.stat + '</li>'
}

function getSettings() {
  $.get({
    url: "cgi-bin/get-settings",
    dataType: "json",
    success: initUI,
    error: function () {
      setTimeout(getSettings, 1000);
    },
  });
}

function getSubReports() {
  $.get({
    url: "cgi-bin/get-reports",
    dataType: "json",
    success: renderBI,
    error: function () {
      console.log('getReports fail');
    },
  });
}

function getReports() {
  getSubReports();
  setInterval(getSubReports, 1000);
}

function queryReportmanage() {
  $.get({
    url: "cgi-bin/query-reportmanage",
    dataType: "json",
    success: function (data) {
      console.log('queryReportmanage succ', data);
    },
    error: function () {
      console.log('queryReportmanage fail');
    },
  });
}

function addStat(data) {
  $.get({
    url: "cgi-bin/add-stat",
    dataType: "json",
    data,
    success: function (res) {
      console.log(res);
    },
    error: function (res) {
      console.log('addStat fail', res);
    },
  });
}

function addRule(data) {
  $.get({
    url: "cgi-bin/add-rule",
    dataType: "json",
    data,
    success: function (res) {
      console.log(res);
    },
    error: function (res) {
      console.log('addRule fail', res);
    },
  });
}

function init() {
  getSettings();
  getReports();
  queryReportmanage();
  // addRule({
  //   rule_desc: '多语言多语言',
  //   rule_type: 4
  // });
  const rules = [{ "field": "flang", "desc": "flang", "rule_id": 114, "isnull": "1" }]
  addStat({
    first_level_id: 111544, // 一级分类id [int]
    second_level_id: 111546, // 二级分类id
    third_level_id: 10, // 三级分类id
    temp_ids: '72', // 模板id,多个模板id用英文逗号分隔【string】
    // page: '', // 页面【string】
    // page_id: '', // 组件页面id【string】
    page_desc: '钱包.落地页', // 页面中文名称【string】
    event_code: 'wallet.test.index.page_brow', // 事件代码【string】
    pm: 'mirayang', // 产品负责人【string】
    developer: 'mirayang', // 开发负责人【string】
    creator: 'mirayang', // 创建人【string】
    // add_virtual_page: '', // 是否添加虚拟页面 1:是;0:否【int】
    event_type: 1, // 上报类型：1:事件类型;2:页面类型【int】
    // launch_site: '', // 投放位：0:否;1：广告投放位2:功能投放位【int】
    // virtual_id: '', // 虚拟页面ID【int】
    // remark: '', // 备注【string】
    rule_original: JSON.stringify(rules), // 自定义字段(json)【string】
    status: 0, // 审核状态：0未提交审批,1审批中,2审批不通过,3审批通过,4 下线,10 存量上报【int】
  });
}