// シートにメニューを追加
function addMenu() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet(),
      entries = [
        {
          name :"実行",
          functionName : "doExportFile"
        }
      ];
  sheet.addMenu("ブランドリストファイル出力", entries);
}

// brand_data内の関数を実行してファイルをエクスポート
function doExportFile() {
  
  var html = HtmlService.createTemplateFromFile('brand_data');
  var folder_id = '1836ZLuL5_NZkWrBDmHdl7-C6UP3w-s2j';
  var drive = DriveApp.getFolderById(folder_id);

  drive.createFile('brand_data.xhtml', html.evaluate().getContent(), "text/plain");

}