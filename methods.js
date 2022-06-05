thisResult = ""

function readURLName(Rest)
{
    	length = parseInt(Rest.substr(32,32),16) * 2
    	readURL = hex2a(Rest.substr(32*2,length))
        count = Math.ceil(length/32)
        Rest = Rest.substr(32*count)

        while(parseInt(Rest.substr(32,32),16) == 0)
            Rest = Rest.substr(32)

        Length2=parseInt(Rest.substr(32*2,32),16) * 2
        readTitle=hex2a(Rest.substr(32*3,Length2))

	return  MethodID_debug( Rest.substr(32*4)) + "<td><a href=" + readURL + ">" + readTitle + "</a>"
}

function MethodID_debug( Rest )
      {

    Text = ""
        for(x = 0; x < Rest.length; x = x + 32)
          {
    Text = Text + "<br>" + Rest.substr(x,32)
          }

        return Text;

      }


function MethodID_other( Rest )
      {

    Text = "[default]"
        for(x = 0; x < Rest.length; x = x + 32)
          {
    Text = Text + "<br>" + Rest.substr(x,32)
          }

    Text = Text + "<td>" + hex2a(Rest)
        return Text;

      }


function MethodID_0x470bb62b(Rest)
{
	Rest = Rest.substr(32*5)
        length = parseInt(Rest.substr(0,32),16) * 2
	Rest = Rest.substr(32)
        readURL = hex2a(Rest.substr(0,length))
        count = Math.ceil(length/32)
        Rest = Rest.substr(32*count)
        while(parseInt(Rest.substr(32,32),16) == 0)
            Rest = Rest.substr(32)
	    Rest = Rest.substr(32)

        length2=parseInt(Rest.substr(0,32),16) * 2
	Rest = Rest.substr(32)
        readTitleH=Rest.substr(0,length2)
//	readTitle=decodeStr(readTitleH)
	readTitle=hex2a(readTitleH)

        return "<a href=" + readURL + ">" + readTitle + "</a>"
}

function MethodID_0x2e18a7cd(Rest)
{

    Text = "[alter]"
        for(x = 0; x < Rest.length; x = x + 32)
          {
    Text = Text + "<br>" + Rest.substr(x,32)
          }

    Text = Text + "<td>" + hex2a(Rest)
        return Text;

}


function MethodID_0xa9e732bb(Rest)
{
	// 25786234 Polygon
	// 0x387ac2a3f822e5ccb714cec10b86feaaa900ceb1
        // GANDALF
	// cashout
	// 94
	return "<td>GANDALF.cashout: " + parseInt(Rest.substr(32*1,32),16) 

}

function MethodID_0x5c0ef2f1 ( Rest )
     {
     var fnal="";
     last = Rest.substr(192)
     end = endpos(last);
     fnal = fnal + hex2a(last.substr(0,end));
     fnal = fnal + "<td>";
     fnal = fnal + "To: 0x" + Rest.substr(88,40) + "<br>";
     return fnal;
     }


function MethodID_0x2e18a7cd(Rest)
{

    Text = "[alter]"
        for(x = 0; x < Rest.length; x = x + 32)
          {
    Text = Text + "<br>" + Rest.substr(x,32)
          }

    Text = Text + "<td>" + hex2a(Rest)
        return Text;

}


function MethodID_0x6132ccca(Rest)
{

         anchor1=Rest.substr(32*4+24,40)
         anchor2=Rest.substr(32*6+24,40)
         anchor3=Rest.substr(32*8+24,40)
	 anchor4=Rest.substr(32*10+24,40)

	anchors="<br>"
	anchors=anchors + anchor1 + "<br>" 
        anchors=anchors + anchor2 + "<br>"
        anchors=anchors + anchor3 + "<br>"
        anchors=anchors + anchor4 + "<br>"



	return anchors + "|" + hex2a(Rest.substr(32*20))

}

function MethodID_alter(Rest)
{
    Rest = Rest.substr(32*9)

	len1=parseInt(Rest.substr(0,32),16) * 2
	return hex2a(Rest.substr(32,32),len1)
	
    Text = "[alter]"

	Text = Text + len1 + " " + skipblock


        for(x = 0; x < Rest.length; x = x + 32)
          {
    Text = Text + "<br>" + Rest.substr(x,32)
          }

    Text = Text + "<td>" + hex2a(Rest)
        return Text;

}


function MethodID_0x7ff36ab5(Rest)
{
//	0	amountOutMin	uint256	472933455267843451
//      1	path	address[]	0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270
//                                      0x90A4a4be820842c6C8fa31a2AC40f540E68D5a77
//      2	to	address	0xE46E46Bc205DF560874C18F2430C18a604253120
//      3	deadline	uint256	3281542970

	amountOutMin=parseInt(Rest.substr(32,32),16)
	deadline=parseInt(Rest.substr(32*7,32),16)
	count=parseInt(Rest.substr(32*9,32),16)
	Rest=Rest.substr(32*10)
	Addresses=""
	for(x=0;x < count; x = x + 1)
	{
	    Addresses = Addresses + "<br>" + Rest.substr(24,40) 
		Rest=Rest.substr(64)
	}
	return "<td>Plasma Bridge<td>amountOutMin:" + amountOutMin + "<br>deadline:" + deadline + "<hr>addresses[]" + Addresses + "<hr>" + Rest;

}

function MethodID_0xf305d719(Rest)
{
	token = "Token: " + Rest.substr(24,40)
	Rest = Rest.substr(32*2)
	amountTokenDesired = "amountTokenDesired: " + Rest.substr
// 1	amountTokenDesired	uint256	10000000000000000000
// 2	amountTokenMin	uint256	10000000000000000000
// 3	amountETHMin	uint256	1000000000000000000
// 4	to	address	0xE46E46Bc205DF560874C18F2430C18a604253120
// 5	deadline	uint256	1640771760

	Text = ""
	while(Rest.length > 0)
	{
		Text = Text + Rest.substr(0,32) + "<br>"
		Rest = Rest.substr(32)
	}

	return "<td>QuickSwap<td>" + token + "<hr>" + Text 

}


function MethodID_0x8965356f( Rest )
     {

                Text = Rest.substr(32*4)
//	        return MethodID_other(Text)

                if(hex2a(Text.substr(0,2)) == '(')
                        {
                        lisp = hex2a(Text)
                        lisp_ = lisp.length 
			console.log(lisp)
                return evalLISP(hex2a(Text.substr(2,lisp_)))
                        }


     }


function MethodID_0x3740071f( Rest ) 
      {

              imageDecode="https://secretbeachsolutions.com/evm_img_decode.php?address="

              Text = Rest.substr(640);
              fnal = "";


	        if(hex2a(Text.substr(0,2)) == '(')
			{
			lisp = hex2a(Text)
			console.log(lisp)
			lisp_ = lisp.length - 2
		return evalLISP(hex2a(Text.substr(2,lisp_)))
//			return "Xxx"
			}

                if(Rest.substr(640,1) == 'c')
                 {
                         return "<br><img width=400px src=" + imageDecode + from + "&blkpos=" + blockNo + "-" + txindex + ">"
		//	 return from  + "|" + blockNo + "|" + txindex + "|"
                 }
                else 
              {
                      return hex2a(Text)
              }
      }


function  MethodID_0x37822a63(Rest)
    {
         anchor1=Rest.substr(32*4+24,40)
         anchor2=Rest.substr(32*6+24,40)
         anchor3=Rest.substr(32*8+24,40)

         Length=parseInt(Rest.substr(32*11,32),16) * 2
         URL=hex2a(Rest.substr(32*12,Length))
	 Count=Math.ceil(Length/32)
	 Rest = Rest.substr(32*(12+Count))
	
	while(parseInt(Rest.substr(32,32),16) == 0)
	    Rest = Rest.substr(32)

	Length2=parseInt(Rest.substr(32,32),16) * 2
        Title=hex2a(Rest.substr(32*2,Length2))	

            Text = "<td><a href=" + URL + ">" + Title + "</a>"
            Text = Text + "<hr>" + anchor1 + "<br>" + anchor2 + "<br>" + anchor3
        return Text;

    }

function evalLISP(Code) 
		{
			fCommand = Code.trim()
			fCommand = fCommand.replace(/\).*/,'');
			fCommand = fCommand.trim()	
			console.log(">" + fCommand + "<")
			Command_arr = fCommand.split(" ")
			var Command = Command_arr.shift()
			console.log(Command_arr)

				switch(Command){
				  case "random": return random(Command_arr)
				break;
				}
			return "||" + Command + "|" + Code
		}

function random2(x,position) {

magic=16 % x
magic2=0

switch(x) {
        case 2: magic2=1; break;
        case 3: magic2=3; break;
	case 4: magic2=1; break;
        case 5: magic2=5; break;
        case 6: magic2=3; break;
        case 7: magic2=7; break;
        case 8: magic2=1; break;
        case 9: magic2=3; break;
        case 10: magic2=5; break;
        case 11: magic2=11; break;
        case 12: magic2=3; break;
        case 13: magic2=13; break;
        case 14: magic2=7; break;
        case 15: magic2=5; break;
        case 16: magic2=1; break;
	case 17: magic2=17; break;
	case 18: magic2=6; break;
	case 19: magic2=19; break;
	case 20: magic2=5; break;
	case 21: magic2=7; break;
	case 22: magic2=11; break;
	case 23: magic2=23; break;
	case 24: magic2=3; break;
	case 25: magic2=5; break;
	case 26: magic2=13; break;
	case 27: magic2=3; break;
	case 28: magic2=7; break;
	case 29: magic2=29; break;
	case 30: magic2=30; break;
	case 31: magic2=31; break;
	case 32: magic2=2; break;
	case 40: magic2=5; break;
	case 50: magic2=5; break;
	case 75: magic2=5; break;
	case 100: magic2=5; break;
} 

old = position
base = parseInt(txHash.substr(position,magic2),16)
base2 = parseInt(blockHash.substr(position,magic2),16) + base
position = position + magic2
offset = offset + magic2
val = base2 % x
val = val + 1
total = total + val
return x + ":" + val

}

function evalDice(Message)
{

                if(Message.substr(0,1) == '(')
                        {
                        lisp_ = Message.length
                        console.log(Message + " " + lisp_)
                toEval =  Message.substr(1,lisp_)
			console.log(toEval)
		return evalLISP(toEval)
                        }
		return Message 

}


function random(Array)
{

	Text = ""
	console.log(blockHash)
        position = parseInt(blockHash.substr(2,1),16) + 2
	offset = 0


	for(x = 0 ; x < Array.length; x++)
	{
        Text = Text + " " + random2(parseInt(Array[x],10),position + offset)
	}

	return Text
}

async function loadWeb3() {
                        if(window.ethereum) {
                                window.web3 = new Web3(window.ethereum);
                                window.ethereum.enable();
                                }
                        }

async function loadContract() {
                return await new window.web3.eth.Contract(
[
        {
                "inputs": [
                        {
                                "internalType": "string",
                                "name": "Random",
                                "type": "string"
                        }
                ],
                "name": "roll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
        }
]
                         , '0x57b60c4d03e806081d6c539f4012e8e6bdfcca8c');
                }

async function load() {
        await loadWeb3();
        window.contract = await loadContract();
               }

async function getCurrentAccount() {
        const accounts = await window.web3.eth.getAccounts();
        console.log(accounts);
        return accounts[0];
}

async function changeInfo(getMessage) {

        const account = await getCurrentAccount();
  //      var getMessage = document.getElementById('message').value;


       await window.contract.methods.roll(getMessage).send({ from: account })
	.then(function (tempResult) {
		blockHash = tempResult.blockHash
		txHash = tempResult.transactionHash
		console.log(tempResult)
		thisResult = tempResult
		console.log(thisResult)
		dice = evalDice(getMessage)
		console.log(getMessage)		

	updateTarget("<table border=1>" + "<tr><td>--<td>" + thisResult.blockNumber + "<td>---<td><h1>" + dice + "</h1></tr>" + `${final}` + "</table>")


                    }).catch(error => {
                    console.log(error);
                 });
        }

async function changeThisInfo(getMessage) {

        const account = await getCurrentAccount();

        await window.contract.methods.roll(getMessage).send({ from: account })
        .then(function (txHash) {

  	loadPage(findGetParameter("network"),findGetParameter("address"),findGetParameter("apikey"),startblock,endblock);
	location.reload();

                    }).catch(error => {
                    console.log(error);
                 });
        }

                             ////////////////////////////////////////

     function callMethod() {

        switch(MethodID) {

        case '0x470bb62b':
          final = final + MethodID_0x470bb62b(Rest)
            break;

        case '0x5f42450d':
          final = final + readURLName(Rest.substr(32*8))
            break;

        case '0x8965356f':
          final = final + MethodID_0x8965356f(Rest);
                break;

        case '0x5c0ef2f1':
        final = final + MethodID_0x5c0ef2f1(Rest);
           break;


       case '0x6132ccca':

        final = final + MethodID_0x6132ccca(Rest);
             break;

         case '0x60806040':    /* This is the create MethodID, ignore */
            break;

        case '0x095ea7b3':
           final = final + "SKIP"
                break;

        case '0x5ed50050':

//      final = final + MethodID_0x5ed50050(Rest);
                break;


        case '0x3740071f':
           final = final + MethodID_0x3740071f(Rest)
               break;

        case '0xc2692fe1':
                anchor1 = Rest.substr(32*4+24,40)
                        final = final + "<td>" + readURLName(Rest.substr(32*6)) + "<hr>" + anchor1
                break;

        case '0x37822a63':

           final = final + MethodID_0x37822a63(Rest);
           break;

        case '0x7ff36ab5':
             final = final + MethodID_0x7ff36ab5(Rest);
             break;

        case '0x2e18a7cd':
             skipblock = MethodID_alter(Rest);
             final = final + skipblock
             break;

        case '0xa9e732bb':
           final = final + MethodID_0xa9e732bb(Rest);
           break;

        case '0xf305d719':
           final = final + MethodID_0xf305d719(Rest);
           break;

        case '0x5ae401dc':
           final = final + "Uniswap..."
            break;

        case '0x5f575529':
           final = final + "Swap Router..."
                             break;

        case '0x18cbafe5':
                            final = final + "Quickswap Router"
                             break;

        case '0x93fdec86':
                             final = final + "<td>GANDALF ???"
                             break;


          default:
              final = final + MethodID_other(Rest);
            break;
                }
         }



     ///////////////////////////////////////////////////////////////////

