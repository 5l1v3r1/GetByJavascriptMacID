// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function LoadInfoMacID() {
    //var objWMIService = SWBemlocator.ConnectServer("IP Adresi", "root\cimv2", "DomainName\Username", "test1234");

    var locator = new ActiveXObject("WbemScripting.SWbemLocator");
    var service = locator.ConnectServer("127.1.1/");
    var properties = service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
    var e = new Enumerator(properties);
    document.write("<table border=1>");
    dispHeading();
    for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
        var p = e.item();
        document.write("<tr>");
        document.write("<td>" + e.Caption + "</td>");
        document.write("<td>" + e.IPFilterSecurityEnabled + "</td>");
        document.write("<td>" + e.IPPortSecurityEnabled + "</td>");
        document.write("<td>" + e.IPXAddress + "</td>");
        document.write("<td>" + e.IPXEnabled + "</td>");
        document.write("<td>" + e.IPXNetworkNumber + "</td>");
        document.write("<td>" + e.MACAddress + "</td>");
        document.write("<td>" + e.WINSPrimaryServer + "</td>");
        document.write("<td>" + e.WINSSecondaryServer + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
function dispHeading() {
    document.write("<thead>");
    document.write("<td>Caption</td>");
    document.write("<td>IPFilterSecurityEnabled</td>");
    document.write("<td>IPPortSecurityEnabled</td>");
    document.write("<td>IPXAddress</td>");
    document.write("<td>IPXEnabled</td>");
    document.write("<td>IPXNetworkNumber</td>");
    document.write("<td>MACAddress</td>");
    document.write("<td>WINSPrimaryServer</td>");
    document.write("<td>WINSSecondaryServer</td>");
    document.write("</thead>");
}


dispHeading();
LoadInfoMacID();

