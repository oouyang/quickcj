var Infinity = 0xffffffff;
//var LazyFactor = 0x00ffffff;
var MaxTransfer = 3;
var MaxDistance = 20000;

var isTransfer = null;

var slist = {
	R33: '淡水', R32: '紅樹林', R31: '竹圍', R30: '關渡', R29: '忠義', R28: '復興崗', R26: '北投', R25: '奇岩', R24: '唭哩岸',
	R23: '石牌', R22: '明德', R21: '芝山', R20: '士林', R18A: '劍潭', R17: '圓山', R16: '民權西路', R15: '雙連', R14: '中山',
	R13: '台北車站', R12: '台大醫院', R11: '中正紀念堂', R10: '東門', R09: '大安森林公園', R08: '大安', R07: '信義安和', R06: '台北101/世貿', R05: '象山',
	R27: '新北投',
	BL17: '南港', BL18: '南港展覽館', BL16: '昆陽', BL15: '後山埤', BL14: '永春', BL13: '市政府', BL12: '國父紀念館', 
	BL11: '忠孝敦化', BL10: '忠孝復興', BL9: '忠孝新生', BL8: '善導寺', BL6: '西門', BL5: '龍山寺', BL4: '江子翠', 
	BL3: '新埔', BL2: '板橋', BL1: '府中', BL40: '亞東醫院', BL39: '海山', BL38: '土城', BL37: '永寧', 
	O8: '大橋頭', O10: '中山國小', O11: '行天宮', O12: '松江南京', O15: '古亭', O16: '頂溪', O17: '永安市場', O18: '景安', O19: '南勢角', 
	O59: '迴龍', O60: '丹鳳', O1: '輔大', O2: '新莊', O3: '頭前庄', O4: '先嗇宮', O5: '三重', O6: '菜寮', O7: '台北橋', 
	O43: '蘆洲', O44: '三民高中', O45: '徐匯中學', O46: '三和國中', O47: '三重國小', 
	G21: '南京三民', G22: '松山', G19: '台北小巨蛋', G18: '南京東路', G18A: '南京復興', G14: '北門', G12: '小南門', G9: '台電大樓', G7: '公館', 
	G6: '萬隆', G5: '景美', G4: '大坪林', G3: '七張', G2: '新店區公所', G1: '新店', 
	G1A: '小碧潭', 
	B10: '南港軟體園區', B9: '東湖', B8: '葫洲', B7: '大湖公園', B6: '內湖', B5: '文德', B4: '港墘', B3: '西湖', 
	B2: '劍南路', B1: '大直', BR1: '松山機場', BR2: '中山國中', BR6: '科技大樓', BR7: '六張犁', BR8: '麟光', BR9: '辛亥', 
	BR10: '萬芳醫院', BR11: '萬芳社區', BR12: '木柵', BR13: '動物園', 
	Y18: '幸福', Y19: '新北產業園區', Y16: '新埔民生', Y14: '板新', Y13: '中原', Y12: '橋和', Y11: '華中橋', Y9: '景平', 
	Y44: '秀朗橋', Y7: '十四張'
};

var Data = {

	NEIHU: {
		text: '內湖線通車時',
		llist: {
			R: '淡水線', G: '新店線', BL: '板南線', BR: '文湖線', O3: '中和線', G1: '小南門線', G2: '小碧潭支線', R1: '新北投支線', X: '接駁公車'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 0, l: 'X'},
			'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和線
			'O15-O16': {d: 2156, l: 'O3'}, 'O16-O17': {d: 1300, l: 'O3'}, 'O17-O18': {d: 1150, l: 'O3'}, 'O18-O19': {d: 692, l: 'O3'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G1'}, 'G12-R11': {d: 822, l: 'G1'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'R'},
			'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18': {d: 1050, l: 'BR'},'BL10-G18': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'O3' && b == 'R') return false;
			if (a == 'G' && b == 'R') return false;
			return a != b;
		}
	},

	XINZHUANG: {
		text: '新莊線新莊段通車時',
		llist: {
			R: '淡水線', G: '新店線', BL: '板南線', BR: '文湖線', O: '新蘆線', O1: '新蘆線', O2: '新蘆線', O3: '中和線', G1: '小南門線', G2: '小碧潭支線', R1: '新北投支線'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 1130, l: 'BL'}, 'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和新蘆線 (新莊線)
		//	'O59-O60': {d: 1295, l: 'O1'}, 'O1-O60': {d: 1247, l: 'O1'}, 
			'O1-O2': {d: 1826, l: 'O1'}, 'O2-O3': {d: 1007, l: 'O1'}, 'O3-O4': {d: 1286, l: 'O1'}, 'O4-O5': {d: 1675, l: 'O1'},
			'O5-O6': {d: 891, l: 'O1'}, 'O6-O7': {d: 1009, l: 'O1'}, 'O7-O8': {d: 1339, l: 'O1'},
			// 中和新蘆線 (蘆洲線)
			'O47-O8': {d: 1877, l: 'O2'}, 'O43-O44': {d: 950, l: 'O2'}, 'O44-O45': {d: 1100, l: 'O2'}, 'O45-O46': {d: 1010, l: 'O2'}, 'O46-O47': {d: 1200, l: 'O2'},
			// 中和新蘆線 (新莊線市區段 + 中和線)
			'O8-R16': {d: 681, l: 'O'}, 'O10-R16': {d: 659, l: 'O'}, 'O10-O11': {d: 924, l: 'O'}, 'O11-O12': {d: 823, l: 'O'}, 'BL9-O12': {d: 1147, l: 'O'},
			'O15-O16': {d: 2156, l: 'O3'}, 'O16-O17': {d: 1300, l: 'O3'}, 'O17-O18': {d: 1150, l: 'O3'}, 'O18-O19': {d: 692, l: 'O3'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G1'}, 'G12-R11': {d: 822, l: 'G1'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'R'}, 'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18': {d: 1050, l: 'BR'},'BL10-G18': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'O3' && b == 'R') return false;
			if (a == 'G' && b == 'R') return false;
			if (a == 'O' && b == 'O1') return false;
			if (a == 'O' && b == 'O2') return false;
			return a != b;
		}
	},

	DONGMEN: {
		text: '東門段通車時',
		llist: {
			R: '淡水線', G: '新店線', BL: '板南線', BR: '文湖線', O: '中和新蘆線', O1: '中和新蘆線', O2: '中和新蘆線', G1: '小南門線', G2: '小碧潭支線', R1: '新北投支線'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 1130, l: 'BL'}, 'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和新蘆線 (新莊線)
			'O1-O2': {d: 1826, l: 'O1'}, 'O2-O3': {d: 1007, l: 'O1'}, 'O3-O4': {d: 1286, l: 'O1'}, 'O4-O5': {d: 1675, l: 'O1'},
			'O5-O6': {d: 891, l: 'O1'}, 'O6-O7': {d: 1009, l: 'O1'}, 'O7-O8': {d: 1339, l: 'O1'},
			// 中和新蘆線 (蘆洲線)
			'O47-O8': {d: 1877, l: 'O2'}, 'O43-O44': {d: 950, l: 'O2'}, 'O44-O45': {d: 1100, l: 'O2'}, 'O45-O46': {d: 1010, l: 'O2'}, 'O46-O47': {d: 1200, l: 'O2'},
			// 中和新蘆線 (新莊線市區段 + 中和線)
			'O8-R16': {d: 681, l: 'O'}, 'O10-R16': {d: 659, l: 'O'}, 'O10-O11': {d: 924, l: 'O'}, 'O11-O12': {d: 823, l: 'O'},
			'BL9-O12': {d: 1147, l: 'O'}, 'BL9-R10': {d: 1180, l: 'O'}, 'O15-R10': {d: 1250, l: 'O'}, 'O15-O16': {d: 2156, l: 'O'},
			'O16-O17': {d: 1300, l: 'O'}, 'O17-O18': {d: 1150, l: 'O'}, 'O18-O19': {d: 692, l: 'O'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G1'}, 'G12-R11': {d: 822, l: 'G1'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'G'}, 'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18': {d: 1050, l: 'BR'},'BL10-G18': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'G' && b == 'R') return false;
			if (a == 'O' && b == 'O1') return false;
			if (a == 'O' && b == 'O2') return false;
			return a != b;
		}
	},

	XINYI: {
		text: '信義線通車時',
		llist: {
			R: '淡水信義線', G: '新店線', BL: '板南線', BR: '文湖線', O: '中和新蘆線', O1: '中和新蘆線', O2: '中和新蘆線', G2: '小碧潭支線', R1: '新北投支線'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 信義線
			'R10-R11': {d: 1200, l: 'R'}, 'R09-R10': {d: 657, l: 'R'}, 'R08-R09': {d: 798, l: 'R'}, 'R07-R08': {d: 792, l: 'R'},
			'R06-R07': {d: 1082, l: 'R'}, 'R05-R06': {d: 859, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 1130, l: 'BL'}, 'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和新蘆線 (新莊線)
			'O59-O60': {d: 1295, l: 'O1'}, 'O1-O60': {d: 1247, l: 'O1'}, 
			'O1-O2': {d: 1826, l: 'O1'}, 'O2-O3': {d: 1007, l: 'O1'}, 'O3-O4': {d: 1286, l: 'O1'}, 'O4-O5': {d: 1675, l: 'O1'},
			'O5-O6': {d: 891, l: 'O1'}, 'O6-O7': {d: 1009, l: 'O1'}, 'O7-O8': {d: 1339, l: 'O1'},
			// 中和新蘆線 (蘆洲線)
			'O47-O8': {d: 1877, l: 'O2'}, 'O43-O44': {d: 950, l: 'O2'}, 'O44-O45': {d: 1100, l: 'O2'}, 'O45-O46': {d: 1010, l: 'O2'}, 'O46-O47': {d: 1200, l: 'O2'},
			// 中和新蘆線 (新莊線市區段 + 中和線)
			'O8-R16': {d: 681, l: 'O'}, 'O10-R16': {d: 659, l: 'O'}, 'O10-O11': {d: 924, l: 'O'}, 'O11-O12': {d: 823, l: 'O'},
			'BL9-O12': {d: 1147, l: 'O'}, 'BL9-R10': {d: 1180, l: 'O'}, 'O15-R10': {d: 1250, l: 'O'}, 'O15-O16': {d: 2156, l: 'O'},
			'O16-O17': {d: 1300, l: 'O'}, 'O17-O18': {d: 1150, l: 'O'}, 'O18-O19': {d: 692, l: 'O'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G'}, 'G12-R11': {d: 822, l: 'G'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'G'}, 'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18': {d: 1050, l: 'BR'},'BL10-G18': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'O' && b == 'O1') return false;
			if (a == 'O' && b == 'O2') return false;
			return a != b;
		}
	},
	
	SONGSHAN: {
		text: '松山線通車時',
		llist: {
			BR: '1-文湖線', R: '2-淡水信義線', G: '3-松山新店線', O: '4-中和新蘆線', O1: '4A-中和新蘆線', O2: '4B-中和新蘆線', BL: '5-板南線', G2: '小碧潭支線', R1: '新北投支線'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 信義線
			'R10-R11': {d: 1200, l: 'R'}, 'R09-R10': {d: 657, l: 'R'}, 'R08-R09': {d: 798, l: 'R'}, 'R07-R08': {d: 792, l: 'R'},
			'R06-R07': {d: 1082, l: 'R'}, 'R05-R06': {d: 859, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 1130, l: 'BL'}, 'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和新蘆線 (新莊線)
			'O59-O60': {d: 1295, l: 'O1'}, 'O1-O60': {d: 1247, l: 'O1'}, 
			'O1-O2': {d: 1826, l: 'O1'}, 'O2-O3': {d: 1007, l: 'O1'}, 'O3-O4': {d: 1286, l: 'O1'}, 'O4-O5': {d: 1675, l: 'O1'},
			'O5-O6': {d: 891, l: 'O1'}, 'O6-O7': {d: 1009, l: 'O1'}, 'O7-O8': {d: 1339, l: 'O1'},
			// 中和新蘆線 (蘆洲線)
			'O47-O8': {d: 1877, l: 'O2'}, 'O43-O44': {d: 950, l: 'O2'}, 'O44-O45': {d: 1100, l: 'O2'}, 'O45-O46': {d: 1010, l: 'O2'}, 'O46-O47': {d: 1200, l: 'O2'},
			// 中和新蘆線 (新莊線市區段 + 中和線)
			'O8-R16': {d: 681, l: 'O'}, 'O10-R16': {d: 659, l: 'O'}, 'O10-O11': {d: 924, l: 'O'}, 'O11-O12': {d: 823, l: 'O'},
			'BL9-O12': {d: 1147, l: 'O'}, 'BL9-R10': {d: 1180, l: 'O'}, 'O15-R10': {d: 1250, l: 'O'}, 'O15-O16': {d: 2156, l: 'O'},
			'O16-O17': {d: 1300, l: 'O'}, 'O17-O18': {d: 1150, l: 'O'}, 'O18-O19': {d: 692, l: 'O'}, 
			// 松山線
			'G21-G22': {d: 1339, l: 'G'}, 'G19-G21': {d: 1053, l: 'G'}, 'G18A-G19': {d: 1014, l: 'G'}, 'G18A-O12': {d: 1072, l: 'G'},
			'O12-R14': {d: 1315, l: 'G'}, 'G14-R14': {d: 1201, l: 'G'}, 'BL6-G14': {d: 836, l: 'G'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G'}, 'G12-R11': {d: 822, l: 'G'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'G'}, 'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18A': {d: 1050, l: 'BR'},'BL10-G18A': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'O' && b == 'O1') return false;
			if (a == 'O' && b == 'O2') return false;
			return a != b;
		}
	},
	
	ALL: {
		text: '環狀線西環段通車時',
		llist: {
			R: '淡水信義線', G: '新店松山線', BL: '板南線', BR: '文湖線', O: '中和新蘆線', O1: '中和新蘆線', O2: '中和新蘆線', Y: '環狀線', G2: '小碧潭支線', R1: '新北投支線'
		},
		dlist: {
			// 淡水線
			'R32-R33': {d: 2062, l: 'R'}, 'R31-R32': {d: 1935, l: 'R'}, 'R30-R31': {d: 2050, l: 'R'}, 'R29-R30': {d: 880, l: 'R'},
			'R28-R29': {d: 1441, l: 'R'}, 'R26-R28': {d: 1621, l: 'R'}, 'R25-R26': {d: 761, l: 'R'}, 'R24-R25': {d: 851, l: 'R'},
			'R23-R24': {d: 1240, l: 'R'}, 'R22-R23': {d: 610, l: 'R'}, 'R21-R22': {d: 887, l: 'R'}, 'R20-R21': {d: 980, l: 'R'},
			'R18A-R20': {d: 1191, l: 'R'}, 'R17-R18A': {d: 1519, l: 'R'}, 'R16-R17': {d: 1020, l: 'R'}, 'R15-R16': {d: 559, l: 'R'},
			'R14-R15': {d: 543, l: 'R'}, 'R13-R14': {d: 630, l: 'R'}, 'R12-R13': {d: 630, l: 'R'}, 'R11-R12': {d: 950, l: 'R'},
			// 信義線
			'R10-R11': {d: 1200, l: 'R'}, 'R09-R10': {d: 657, l: 'R'}, 'R08-R09': {d: 798, l: 'R'}, 'R07-R08': {d: 792, l: 'R'},
			'R06-R07': {d: 1082, l: 'R'}, 'R05-R06': {d: 859, l: 'R'},
			// 新北投支線
			'R26-R27': {d: 1030, l: 'R1'},
			// 板南線
			'BL17-BL18': {d: 1130, l: 'BL'}, 'BL16-BL17': {d: 1185, l: 'BL'}, 'BL15-BL16': {d: 1310, l: 'BL'}, 'BL14-BL15': {d: 817, l: 'BL'},
			'BL13-BL14': {d: 1135, l: 'BL'}, 'BL12-BL13': {d: 850, l: 'BL'}, 'BL11-BL12': {d: 719, l: 'BL'}, 'BL10-BL11': {d: 666, l: 'BL'},
			'BL10-BL9': {d: 1129, l: 'BL'}, 'BL8-BL9': {d: 943, l: 'BL'}, 'BL8-R13': {d: 671, l: 'BL'}, 'BL6-R13': {d: 1431, l: 'BL'},
			'BL5-BL6': {d: 1268, l: 'BL'}, 'BL4-BL5': {d: 3079, l: 'BL'}, 'BL3-BL4': {d: 866, l: 'BL'}, 'BL2-BL3': {d: 1274, l: 'BL'},
			'BL1-BL2': {d: 653, l: 'BL'}, 'BL1-BL40': {d: 1314, l: 'BL'}, 'BL39-BL40': {d: 902, l: 'BL'}, 'BL38-BL39': {d: 1463, l: 'BL'}, 'BL37-BL38': {d: 1129, l: 'BL'},
			// 中和新蘆線 (新莊線)
			'O59-O60': {d: 1295, l: 'O1'}, 'O1-O60': {d: 1247, l: 'O1'}, 
			'O1-O2': {d: 1826, l: 'O1'}, 'O2-O3': {d: 1007, l: 'O1'}, 'O3-O4': {d: 1286, l: 'O1'}, 'O4-O5': {d: 1675, l: 'O1'},
			'O5-O6': {d: 891, l: 'O1'}, 'O6-O7': {d: 1009, l: 'O1'}, 'O7-O8': {d: 1339, l: 'O1'},
			// 中和新蘆線 (蘆洲線)
			'O47-O8': {d: 1877, l: 'O2'}, 'O43-O44': {d: 950, l: 'O2'}, 'O44-O45': {d: 1100, l: 'O2'}, 'O45-O46': {d: 1010, l: 'O2'}, 'O46-O47': {d: 1200, l: 'O2'},
			// 中和新蘆線 (新莊線市區段 + 中和線)
			'O8-R16': {d: 681, l: 'O'}, 'O10-R16': {d: 659, l: 'O'}, 'O10-O11': {d: 924, l: 'O'}, 'O11-O12': {d: 823, l: 'O'},
			'BL9-O12': {d: 1147, l: 'O'}, 'BL9-R10': {d: 1180, l: 'O'}, 'O15-R10': {d: 1250, l: 'O'}, 'O15-O16': {d: 2156, l: 'O'},
			'O16-O17': {d: 1300, l: 'O'}, 'O17-O18': {d: 1150, l: 'O'}, 'O18-O19': {d: 692, l: 'O'}, 
			// 松山線
			'G21-G22': {d: 1339, l: 'G'}, 'G19-G21': {d: 1053, l: 'G'}, 'G18A-G19': {d: 1014, l: 'G'}, 'G18A-O12': {d: 1072, l: 'G'},
			'O12-R14': {d: 1315, l: 'G'}, 'G14-R14': {d: 1201, l: 'G'}, 'BL6-G14': {d: 836, l: 'G'}, 
			// 小南門線
			'BL6-G12': {d: 756, l: 'G'}, 'G12-R11': {d: 822, l: 'G'}, 
			// 新店線
			'O15-R11': {d: 1165, l: 'G'}, 'G9-O15': {d: 640, l: 'G'}, 'G7-G9': {d: 900, l: 'G'}, 'G6-G7': {d: 1560, l: 'G'},
			'G5-G6': {d: 1070, l: 'G'}, 'G4-G5': {d: 1150, l: 'G'}, 'G3-G4': {d: 850, l: 'G'}, 'G2-G3': {d: 900, l: 'G'}, 'G1-G2': {d: 1115, l: 'G'},
			// 小碧潭支線
			'G1A-G3': {d: 2500, l: 'G2'}, 
			// 文山內湖線
			'B10-BL18': {d: 600, l: 'BR'}, 'B10-B9': {d: 1010, l: 'BR'}, 'B8-B9': {d: 890, l: 'BR'}, 'B7-B8': {d: 1630, l: 'BR'}, 'B6-B7': {d: 870, l: 'BR'},
			'B5-B6': {d: 1130, l: 'BR'}, 'B4-B5': {d: 1010, l: 'BR'}, 'B3-B4': {d: 830, l: 'BR'}, 'B2-B3': {d: 1290, l: 'BR'}, 'B1-B2': {d: 1330, l: 'BR'},
			'B1-BR1': {d: 2580, l: 'BR'}, 'BR1-BR2': {d: 1480, l: 'BR'}, 'BR2-G18A': {d: 1050, l: 'BR'},'BL10-G18A': {d: 1150, l: 'BR'},
			'BL10-R08': {d: 900, l: 'BR'}, 'BR6-R08': {d: 751, l: 'BR'}, 'BR6-BR7': {d: 1130, l: 'BR'}, 'BR7-BR8': {d: 800, l: 'BR'},
			'BR8-BR9': {d: 1550, l: 'BR'}, 'BR10-BR9': {d: 750, l: 'BR'}, 'BR10-BR11': {d: 1200, l: 'BR'}, 'BR11-BR12': {d: 590, l: 'BR'}, 'BR12-BR13': {d: 805, l: 'BR'},
			// 環狀線
			'Y18-Y19': {d: 1560, l: 'Y'}, 'O3-Y18': {d: 624, l: 'Y'}, 'O3-Y16': {d: 1800, l: 'Y'}, 'BL2-Y16': {d: 1423, l: 'Y'}, 
			'BL2-Y14': {d: 952, l: 'Y'}, 'Y13-Y14': {d: 1392, l: 'Y'}, 'Y12-Y13': {d: 732, l: 'Y'}, 'Y11-Y12': {d: 635, l: 'Y'},
			'O18-Y11': {d: 1440, l: 'Y'}, 'O18-Y9': {d: 1157, l: 'Y'}, 'Y44-Y9': {d: 849, l: 'Y'}, 'Y44-Y7': {d: 1116, l: 'Y'},
			'G4-Y7': {d: 1559, l: 'Y'}
		},
		isTransfer: function(a, b) {
			if (b < a) { var tmp = a; a = b; b = tmp; }

			if (a == 'O' && b == 'O1') return false;
			if (a == 'O' && b == 'O2') return false;
			return a != b;
		}
	}

};

function disToPriceDefault(route) {
	var dis = route.dis;
	if (dis <= 5000) return 20;
	if (dis <= 23000) return 25 + Math.floor((dis-5000) / 3000) * 5;
	return 55 + Math.floor((dis-23000) / 4000) * 5;
}


function setMapData(mapDataKey) {
	llist = Data[mapDataKey].llist;
	dlist = Data[mapDataKey].dlist;
	isTransfer = Data[mapDataKey].isTransfer;
	disToPrice = Data[mapDataKey].disToPrice ? Data[mapDataKey].disToPrice : disToPriceDefault;
}

function getDis(s1, s2) {
	var d = (s1 <= s2 ? dlist[s1+'-'+s2] : dlist[s2+'-'+s1]);
	return d ? d : {d: Infinity};
}

function goAhead(v, sf) {
	for (var s in slist) {
		if (sf == s) continue;
		
		var d = getDis(sf, s);
		var transfer = isTransfer(v[sf].line, d.l);
//		var w = isLazy && transfer ? d.d + LazyFactor : d.d;
		
		if (v[sf].dis + d.d < v[s].dis) {
			v[s].dis = v[sf].dis + d.d;
//			v[s].weight = v[sf].weight + w;
			v[s].path = v[sf].path + s + '-';
			v[s].trans = v[sf].trans + (transfer ? d.l + '-' : '');
			v[s].route = v[sf].route + (transfer ? '<span class="s" s="' + sf + '">' + slist[sf] + '</span><span class="l l_' + d.l + '">' + llist[d.l] + '</span>'  : '');
			v[s].line = d.l;
			v[s].price = disToPrice(v[s]),
			v[s].transCount = v[sf].transCount + (transfer ? 1 : 0),
			goAhead(v, s);
		}
	}
}

function shortestDis(start) {
	var v = {};
	var sCount = 0;
	for (var s in slist) {
		v[s] = { dis: Infinity, path: '-' + start + '-', trans: '-', weight: Infinity, route: '', line: null, transCount: 0 };
		sCount++;
	}
	v[start].dis = v[start].weight = 0;
	v[start].price = 20;
	
	goAhead(v, start);
	
	return v;
	//console.log(v[s2]);
}

function goStep(results, lastinfo, pos, goal, maxDis, maxTransfer) {
	for (var s in slist) {
		if (pos == s) continue;
		if (lastinfo.path.indexOf('-' + s + '-') >= 0) continue;		// no circuler routes
		
		var d = getDis(pos, s, false);
		if (d.d >= Infinity) continue;
		var transfer = isTransfer(lastinfo.line, d.l);
		
		var info = {
			dis: lastinfo.dis + d.d,
			path: lastinfo.path + s + '-',
			trans: lastinfo.trans + (transfer ? d.l + '-' : ''),
			route: lastinfo.route + (transfer ? '<span class="s" s="' + pos + '">' + slist[pos] + '</span><span class="l l_' + d.l + '">' + llist[d.l] + '</span>'  : ''),
			transCount: lastinfo.transCount + (transfer ? 1 : 0),
			line: d.l
		};

		if (info.dis > maxDis) continue;
		if (info.transCount > maxTransfer) continue;
		
		if (s == goal) {
			info.price = disToPrice(info);
			//info.route = info.route + slist[s];
			/*for (var i = 0; i < results.length; i++) {
				if (results[i].dis > info.dis) {
					results.
					break;
				}
			}*/
			results.push(info);
		} else {
		//} else if (info.transCount <= maxTransfer) {
			goStep(results, info, s, goal, maxDis, maxTransfer);
		}
	}
}

function findAllRoutes(start, goal, maxDis, maxTransfer) {
	var v = {};
	var results = [];

	var info = {dis: 0, path: '-' + start + '-', trans: '-', route: '', line: null, transCount: 0};
	
	goStep(results, info, start, goal, maxDis, maxTransfer);
	results.sort(function(a, b) { return a.dis - b.dis })
	
	return results;
}

function routeToHTML(info, s) {
	return '<div class="route">'
//			+ '<span class="dis">' + info.dis + 'm</span>'
			+ '<span class="dis">' + (Math.ceil(info.dis/10) / 100) + 'km</span>'
			+ info.route + '<span class="s" s="' + s + '">' + slist[s] + '</span></div>';
}

function counting() {
	var s1 = $('#station').val();
	//var s2 = $('#station_2').val();
	
	//console.log(s1, s2);
	//$('#res').text(getDis(s1, s2));
	
	var res = shortestDis(s1, false);
	//var res2 = shortestDis(s1, true);

	var html = '<table class="list">';
	var cnt = 0;
	/*for (var s in res) */{
	    var s = $('#station2').val();
		if (s == s1) continue;
		if (res[s].dis >= Infinity) continue;

		var r = res[s];
		
		var more = r.transCount > 1 ? findAllRoutes(s1, s, r.dis + MaxDistance, r.transCount - 1) : [];
		
		html += '<tr>';
		html += '<td class="x l_' + r.line + '"></td>';
		html += '<th class="s" s="' + s + '">' + slist[s] + '</th>';
		html += '<td class="price">' + r.price + '</td><td>';
		html += routeToHTML(r, s);
		
		for (var rt in more) {
			if (more[rt].dis != r.dis) html += routeToHTML(more[rt], s);
		}
		html += '</td></tr>';
		cnt++;
	}
	html += '</table>';
	
	$('#res').html(cnt > 0 ? html : '<h2>此站尚未通車</h2>');

}

function init() {
	$('.s').live('click', function() {
		var s = $(this).attr('s');
		$('#station').val(s).change();
		$('#station2').val(s).change();
	});

	for (var m in Data) {
		$('#map').append('<option value=' + m + '>' + Data[m].text + '</option>')
	}
	$('#map').change(function() {
		setMapData($(this).val());
		counting();
	});

	for (var s in slist) {
		$('#station').append('<option value=' + s + '>' + slist[s] + '</option>')
		$('#station2').append('<option value=' + s + '>' + slist[s] + '</option>')
	}
	$('#station').change(counting);
	$('#station2').change(counting);

	$('#map').val('SONGSHAN').change();
	$('#station').value('R13').change();
	$('#station2').value('R06').change();
}
