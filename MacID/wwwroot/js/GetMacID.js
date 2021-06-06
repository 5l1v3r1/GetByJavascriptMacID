function showMacAddress() {
    console.log("started");
    var obj = new ActiveXObject("WbemScripting.SWbemLocator");
    var s = obj.ConnectServer(".");
    var properties = s.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
    var e = new Enumerator(properties);
    var output;
    output = '<table border="0" cellPadding="5px" cellSpacing="1px" bgColor="#CCCCCC">';
    output = output + '<tr bgColor="#EAEAEA"><td>Caption</td><td>MACAddress</td></tr>';
    while (!e.atEnd()) {
        e.moveNext();
        var p = e.item();
        if (!p) continue;
        output = output + '<tr bgColor="#FFFFFF">';
        output = output + '<td>' + p.Caption; +'</td>';
        output = output + '<td>' + p.MACAddress + '</td>';
        output = output + '</tr>';
        console.log("while loop");
    }
    output = output + '</table>';
    document.getElementById("box").innerHTML = output;
}

showMacAddress();