        // data

        var data = [
            // 第一圈
            {
                'id': '0.0',
                'parent': '',
                'name': '旅游业数据',
            }, 
            // 第二圈
            {
                'id': '1.3',
                'parent': '0.0',
                'name': '亚洲' // Asia
            }, {
                'id': '1.1',
                'parent': '0.0',
                'name': '非洲' // Africa
            }, {
                'id': '1.2',
                'parent': '0.0',
                'name': '美洲' // America
            }, {
                'id': '1.4',
                'parent': '0.0',
                'name': '欧洲' // Europe
            }, {
                'id': '1.5',
                'parent': '0.0',
                'name': '大洋洲' // Oceanic
            },
            
            /*非洲 Africa */
            //  第三圈 东非
            {
                'id': '2.1',
                'parent': '1.1',
                'name': '东非' // Eastern Africa
            },
            // 第四圈 东非包含的国家
            {
                'id': '3.1',
                'parent': '2.1',
                'name': '埃塞俄比亚', // Ethiopia
                'value': 104957438
            }, {
                'id': '3.2',
                'parent': '2.1',
                'name': '坦桑尼亚', // Tanzania
                'value': 57310019
            }, {
                'id': '3.3',
                'parent': '2.1',
                'name': '肯尼亚', // Kenya
                'value': 49699862
            }, {
                'id': '3.4',
                'parent': '2.1',
                'name': '乌干达', // Uganda
                'value': 42862958
            }, {
                'id': '3.5',
                'parent': '2.1',
                'name': '莫桑比克', // Mozambique
                'value': 29668834
            }, {
                'id': '3.6',
                'parent': '2.1',
                'name': '马达加斯加', // Madagascar
                'value': 25570895
            }, {
                'id': '3.7',
                'parent': '2.1',
                'name': '马拉维', // Malawi
                'value': 18622104
            }, {
                'id': '3.8',
                'parent': '2.1',
                'name': '赞比亚', // Zambia
                'value': 17094130
            }, {
                'id': '3.9',
                'parent': '2.1',
                'name': '津巴布韦', // Zimbabwe
                'value': 16529904
            }, {
                'id': '3.10',
                'parent': '2.1',
                'name': '索马里', // Somalia
                'value': 14742523
            }, {
                'id': '3.11',
                'parent': '2.1',
                'name': '南苏丹', // South Sudan
                'value': 12575714
            }, {
                'id': '3.12',
                'parent': '2.1',
                'name': '卢旺达', // Rwanda
                'value': 12208407
            }, {
                'id': '3.13',
                'parent': '2.1',
                'name': '布隆迪', // Burundi
                'value': 10864245
            }, {
                'id': '3.14',
                'parent': '2.1',
                'name': '厄立特里亚', // Eritrea
                'value': 5068831
            }, {
                'id': '3.15',
                'parent': '2.1',
                'name': '毛里求斯', // Mauritius
                'value': 1265138
            }, {
                'id': '3.16',
                'parent': '2.1',
                'name': '吉布提', // Djibouti
                'value': 956985
            }, {
                'id': '3.17',
                'parent': '2.1',
                'name': '留尼汪', // Réunion
                'value': 876562
            }, {
                'id': '3.18',
                'parent': '2.1',
                'name': '科摩罗', //Comoros
                'value': 813912
            }, {
                'id': '3.19',
                'parent': '2.1',
                'name': '马约特', // Mayotte
                'value': 253045
            }, {
                'id': '3.20',
                'parent': '2.1',
                'name': '塞舌尔', // Seychelles
                'value': 94737
            },
            // 第三圈 西非
            {
                'id': '2.5',
                'parent': '1.1',
                'name': '西非'
            },
            // 第四圈 西非包含的国家
            {
                'id': '3.42',
                'parent': '2.5',
                'name': '尼日利亚', // Nigeria
                'value': 190886311
            }, {
                'id': '3.43',
                'parent': '2.5',
                'name': '加纳', // Ghana
                'value': 28833629
            }, {
                'id': '3.44',
                'parent': '2.5',
                'name': '科特迪瓦', // Côte Ivoire
                'value': 24294750
            }, {
                'id': '3.45',
                'parent': '2.5',
                'name': '尼日尔', // Niger
                'value': 21477348
            }, {
                'id': '3.46',
                'parent': '2.5',
                'name': '布基纳法索', // Burkina Faso
                'value': 19193382
            }, {
                'id': '3.47',
                'parent': '2.5',
                'name': '马里', // Mali
                'value': 18541980
            }, {
                'id': '3.48',
                'parent': '2.5',
                'name': '塞内加尔', // Senegal
                'value': 15850567
            }, {
                'id': '3.49',
                'parent': '2.5',
                'name': '几内亚', // Guinea
                'value': 12717176
            }, {
                'id': '3.50',
                'parent': '2.5',
                'name': '贝宁', // Benin
                'value': 11175692
            }, {
                'id': '3.51',
                'parent': '2.5',
                'name': '多哥', // Togo
                'value': 7797694
            }, {
                'id': '3.52',
                'parent': '2.5',
                'name': '塞拉利昂', //Sierra Leone
                'value': 7557212
            }, {
                'id': '3.53',
                'parent': '2.5',
                'name': '利比里亚', // Liberia
                'value': 4731906
            }, {
                'id': '3.54',
                'parent': '2.5',
                'name': '毛里塔尼亚', // Mauritania
                'value': 4420184
            }, {
                'id': '3.55',
                'parent': '2.5',
                'name': '冈比亚', // The Gambia
                'value': 2100568
            }, {
                'id': '3.56',
                'parent': '2.5',
                'name': '几内亚比绍', // Guinea-Bissau
                'value': 1861283
            }, {
                'id': '3.57',
                'parent': '2.5',
                'name': '佛得角', // Cabo Verde
                'value': 546388
            }, {
                'id': '3.58',
                'parent': '2.5',
                'name': '圣赫勒拿岛，阿森松岛和特里斯坦达库尼亚', // Saint Helena, Ascension and Tristan da Cunha
                'value': 4049
            },
            // 第三圈 北非
            {
                'id': '2.3',
                'parent': '1.1',
                'name': '北非' // North Africa
            },
            // 第四圈 北非包含的国家
            {
                'id': '3.30',
                'parent': '2.3',
                'name': '埃及', // Egypt
                'value': 97553151
            }, {
                'id': '3.31',
                'parent': '2.3',
                'name': '阿尔及利亚', // Algeria
                'value': 41318142
            }, {
                'id': '3.32',
                'parent': '2.3',
                'name': '苏丹', // Sudan
                'value': 40533330
            }, {
                'id': '3.33',
                'parent': '2.3',
                'name': '摩洛哥', // Morocco
                'value': 35739580
            }, {
                'id': '3.34',
                'parent': '2.3',
                'name': '突尼斯', // Tunisia
                'value': 11532127
            }, {
                'id': '3.35',
                'parent': '2.3',
                'name': '利比亚', // Libya
                'value': 6374616
            }, {
                'id': '3.36',
                'parent': '2.3',
                'name': '撒哈拉沙漠西部', // Western Sahara
                'value': 552628
            },
            // 第三圈 中非
            {
                'id': '2.2',
                'parent': '1.1',
                'name': '中非' // Central Africa
            },
             // 第四圈 中非包含的国家
            {
                'id': '3.21',
                'parent': '2.2',
                'name': '刚果民主共和国', // Democratic Republic of the Congo
                'value': 81339988
            }, {
                'id': '3.22',
                'parent': '2.2',
                'name': '安哥拉', // Angola
                'value': 29784193
            }, {
                'id': '3.23',
                'parent': '2.2',
                'name': '喀麦隆', // Cameroon
                'value': 24053727
            }, {
                'id': '3.24',
                'parent': '2.2',
                'name': '乍得', // Chad
                'value': 14899994
            }, {
                'id': '3.25',
                'parent': '2.2',
                'name': '刚果', // Congo
                'value': 5260750
            }, {
                'id': '3.26',
                'parent': '2.2',
                'name': '中非共和国', // Central African Republic
                'value': 4659080
            }, {
                'id': '3.27',
                'parent': '2.2',
                'name': '加蓬', // Gabon
                'value': 2025137
            }, {
                'id': '3.28',
                'parent': '2.2',
                'name': '赤道几内亚', // Equatorial Guinea
                'value': 1267689
            }, {
                'id': '3.29',
                'parent': '2.2',
                'name': '圣多美和普林西比', // Sao Tome and Principe
                'value': 204327
            },
            // 第三圈 南非 
            {
                'id': '2.4',
                'parent': '1.1',
                'name': '南非' // South America
            },
            // 第四圈 南非包含的国家
            {
                'id': '3.37',
                'parent': '2.4',
                'name': '南非', // South Africa
                'value': 56717156
            }, {
                'id': '3.38',
                'parent': '2.4',
                'name': '纳米比亚', // Namibia
                'value': 2533794
            }, {
                'id': '3.39',
                'parent': '2.4',
                'name': '博茨瓦纳',  // Botswana
                'value': 2291661
            }, {
                'id': '3.40',
                'parent': '2.4',
                'name': '莱索托', // Lesotho
                'value': 2233339
            }, {
                'id': '3.41',
                'parent': '2.4',
                'name': '斯威士兰', // Swaziland
                'value': 1367254
            },
            
            /* America 美洲*/
            //  南美 第三圈 
            {
                'id': '2.9',
                'parent': '1.2',
                'name': '南美' // South America
            },
            // 南美 包含的国家
            {
                'id': '3.98',
                'parent': '2.9',
                'name': '巴西', // Brazil
                'value': 209288278
            }, {
                'id': '3.99',
                'parent': '2.9',
                'name': '哥伦比亚', // Colombia
                'value': 49065615
            }, {
                'id': '3.100',
                'parent': '2.9',
                'name': '阿根廷', //Argentina
                'value': 44271041
            }, {
                'id': '3.101',
                'parent': '2.9',
                'name': '秘鲁', // Peru
                'value': 32165485
            }, {
                'id': '3.102',
                'parent': '2.9',
                'name': '委内瑞拉', // Venezuela
                'value': 31977065
            }, {
                'id': '3.103',
                'parent': '2.9',
                'name': '智利', // Chile
                'value': 18054726
            }, {
                'id': '3.104',
                'parent': '2.9',
                'name': '厄瓜多尔', // Ecuador
                'value': 16624858
            }, {
                'id': '3.105',
                'parent': '2.9',
                'name': '玻利维亚', // Bolivia
                'value': 11051600
            }, {
                'id': '3.106',
                'parent': '2.9',
                'name': '巴拉圭', // Paraguay
                'value': 6811297
            }, {
                'id': '3.107',
                'parent': '2.9',
                'name': '乌拉圭', // Uruguay
                'value': 3456750
            }, {
                'id': '3.108',
                'parent': '2.9',
                'name': '圭亚那', // Guyana
                'value': 777859
            }, {
                'id': '3.109',
                'parent': '2.9',
                'name': '苏里南', // Suriname
                'value': 563402
            }, {
                'id': '3.110',
                'parent': '2.9',
                'name': '法属圭亚那', // French Guiana
                'value': 282731
            }, {
                'id': '3.111',
                'parent': '2.9',
                'name': '福克兰群岛', // Falkland Islands
                'value': 2910
            },
            // 第三圈 北美
            {
                'id': '2.8',
                'parent': '1.2',
                'name': '北美' //  Northern America
            },
            // 第四圈 北非包含的国家
            {
                'id': '3.93',
                'parent': '2.8',
                'name': '美国', //United States
                'value': 324459463
            }, {
                'id': '3.94',
                'parent': '2.8',
                'name': '加拿大', // Canada
                'value': 36624199
            }, {
                'id': '3.95',
                'parent': '2.8',
                'name': '百慕大', // Bermuda
                'value': 61349
            }, {
                'id': '3.96',
                'parent': '2.8',
                'name': '格陵兰', // Greenland
                'value': 56480
            }, {
                'id': '3.97',
                'parent': '2.8',
                'name': '圣皮埃尔和密克隆', // Saint Pierre and Miquelon
                'value': 6320
            },
            // 中美 第三圈
            {
                'id': '2.7',
                'parent': '1.2',
                'name': '中美' // Central America
            },
            // 第四圈 中非包含的国家
            {
                'id': '3.85',
                'parent': '2.7',
                'name': '墨西哥', // Mexico
                'value': 129163276
            }, {
                'id': '3.86',
                'parent': '2.7',
                'name': '危地马拉', // Guatemala
                'value': 16913503
            }, {
                'id': '3.87',
                'parent': '2.7',
                'name': '洪都拉斯', // Honduras
                'value': 9265067
            }, {
                'id': '3.88',
                'parent': '2.7',
                'name': '萨尔瓦多', // El Salvador
                'value': 6377853
            }, {
                'id': '3.89',
                'parent': '2.7',
                'name': '尼加拉瓜', // Nicaragua
                'value': 6217581
            }, {
                'id': '3.90',
                'parent': '2.7',
                'name': '哥斯达黎加', // Costa Rica
                'value': 4905769
            }, {
                'id': '3.91',
                'parent': '2.7',
                'name': '巴拿马', // Panama
                'value': 4098587
            }, {
                'id': '3.92',
                'parent': '2.7',
                'name': '伯利兹', // Belize
                'value': 374681
            },
            // 第三圈 加勒比
            {
                'id': '2.6',
                'parent': '1.2',
                'name': '加勒比' // Caribbean
            },
            //  第四圈 加勒比包含的国家
            {
                'id': '3.59',
                'parent': '2.6',
                'name': '古巴', // Cuba
                'value': 11484636
            }, {
                'id': '3.60',
                'parent': '2.6',
                'name': '海地', // Haiti
                'value': 10981229
            }, {
                'id': '3.61',
                'parent': '2.6',
                'name': '多明尼加共和国', // Dominican Republic
                'value': 10766998
            }, {
                'id': '3.62',
                'parent': '2.6',
                'name': '波多黎各', // Puerto Rico
                'value': 3663131
            }, {
                'id': '3.63',
                'parent': '2.6',
                'name': '牙买加', // Jamaica
                'value': 2890299
            }, {
                'id': '3.64',
                'parent': '2.6',
                'name': '特立尼达和多巴哥', // Trinidad and Tobago
                'value': 1369125
            }, {
                'id': '3.65',
                'parent': '2.6',
                'name': '瓜德罗普岛', // Guadeloupe
                'value': 449568
            }, {
                'id': '3.66',
                'parent': '2.6',
                'name': '巴哈马', // Bahamas
                'value': 395361
            }, {
                'id': '3.67',
                'parent': '2.6',
                'name': '马提尼克', // Martinique
                'value': 384896
            }, {
                'id': '3.68',
                'parent': '2.6',
                'name': '巴巴多斯', // Barbados
                'value': 285719
            }, {
                'id': '3.69',
                'parent': '2.6',
                'name': '圣卢西亚', // Saint Lucia
                'value': 178844
            }, {
                'id': '3.70',
                'parent': '2.6',
                'name': '库拉索', // Curaçao
                'value': 160539
            }, {
                'id': '3.71',
                'parent': '2.6',
                'name': 'Saint Vincent and the Grenadines',
                'value': 109897
            }, {
                'id': '3.72',
                'parent': '2.6',
                'name': 'Grenada',
                'value': 107825
            }, {
                'id': '3.73',
                'parent': '2.6',
                'name': 'Aruba',
                'value': 105264
            }, {
                'id': '3.74',
                'parent': '2.6',
                'name': 'United States Virgin Islands',
                'value': 104901
            }, {
                'id': '3.75',
                'parent': '2.6',
                'name': 'Antigua and Barbuda',
                'value': 102012
            }, {
                'id': '3.76',
                'parent': '2.6',
                'name': 'Dominica',
                'value': 73925
            }, {
                'id': '3.77',
                'parent': '2.6',
                'name': 'Cayman Islands',
                'value': 61559
            }, {
                'id': '3.78',
                'parent': '2.6',
                'name': 'Saint Kitts and Nevis',
                'value': 55345
            }, {
                'id': '3.79',
                'parent': '2.6',
                'name': 'Sint Maarten',
                'value': 40120
            }, {
                'id': '3.80',
                'parent': '2.6',
                'name': 'Turks and Caicos Islands',
                'value': 35446
            }, {
                'id': '3.81',
                'parent': '2.6',
                'name': 'British Virgin Islands',
                'value': 31196
            }, {
                'id': '3.82',
                'parent': '2.6',
                'name': 'Caribbean Netherlands',
                'value': 25398
            }, {
                'id': '3.83',
                'parent': '2.6',
                'name': 'Anguilla',
                'value': 14909
            }, {
                'id': '3.84',
                'parent': '2.6',
                'name': 'Montserrat',
                'value': 5177
            },
            /***********/
            /* Asia */
            // 第三圈 南亚
            {
                'id': '2.13',
                'parent': '1.3',
                'name': '南亚' // Southern Asia
            },
            // 第四圈 南亚包含的国家
            {
                'id': '3.136',
                'parent': '2.13',
                'name': 'India',
                'value': 1339180127
            }, {
                'id': '3.137',
                'parent': '2.13',
                'name': 'Pakistan',
                'value': 197015955
            }, {
                'id': '3.138',
                'parent': '2.13',
                'name': 'Bangladesh',
                'value': 164669751
            }, {
                'id': '3.139',
                'parent': '2.13',
                'name': 'Iran',
                'value': 81162788
            }, {
                'id': '3.140',
                'parent': '2.13',
                'name': 'Afghanistan',
                'value': 35530081
            }, {
                'id': '3.141',
                'parent': '2.13',
                'name': 'Nepal',
                'value': 29304998
            }, {
                'id': '3.142',
                'parent': '2.13',
                'name': 'Sri Lanka',
                'value': 20876917
            }, {
                'id': '3.143',
                'parent': '2.13',
                'name': 'Bhutan',
                'value': 807610
            }, {
                'id': '3.144',
                'parent': '2.13',
                'name': 'Maldives',
                'value': 436330
            },
            // 第三圈 东亚
            {
                'id': '2.11',
                'parent': '1.3',
                'name': '东亚' // Eastern Asia
            },
            // 第四圈 东亚包含的国家
            {
                'id': '3.117',
                'parent': '2.11',
                'name': '中国', // China
                'value': 1409517397
            }, {
                'id': '3.118',
                'parent': '2.11',
                'name': '日本', // Japan
                'value': 127484450
            }, {
                'id': '3.119',
                'parent': '2.11',
                'name': 'South Korea',
                'value': 50982212
            }, {
                'id': '3.120',
                'parent': '2.11',
                'name': 'North Korea',
                'value': 25490965
            }, {
                'id': '3.121',
                'parent': '2.11',
                'name': 'Taiwan',
                'value': 23626456
            }, {
                'id': '3.122',
                'parent': '2.11',
                'name': 'Hong Kong',
                'value': 7364883
            }, {
                'id': '3.123',
                'parent': '2.11',
                'name': 'Mongolia',
                'value': 3075647
            }, {
                'id': '3.124',
                'parent': '2.11',
                'name': 'Macau',
                'value': 622567
            },
            // 第三圈 东南亚
            {
                'id': '2.12',
                'parent': '1.3',
                'name': '东南亚' // South-Eastern Asia
            },
            // 第四圈 东南亚包含的国家
            {
                'id': '3.125',
                'parent': '2.12',
                'name': 'Indonesia',
                'value': 263991379
            }, {
                'id': '3.126',
                'parent': '2.12',
                'name': 'Philippines',
                'value': 104918090
            }, {
                'id': '3.127',
                'parent': '2.12',
                'name': 'Vietnam',
                'value': 95540800
            }, {
                'id': '3.128',
                'parent': '2.12',
                'name': 'Thailand',
                'value': 69037513
            }, {
                'id': '3.129',
                'parent': '2.12',
                'name': 'Myanmar',
                'value': 53370609
            },  {
                'id': '3.130',
                'parent': '2.12',
                'name': 'Malaysia',
                'value': 31624264
            }, {
                'id': '3.131',
                'parent': '2.12',
                'name': 'Cambodia',
                'value': 16005373
            }, {
                'id': '3.132',
                'parent': '2.12',
                'name': 'Laos',
                'value': 6858160
            }, {
                'id': '3.133',
                'parent': '2.12',
                'name': 'Singapore',
                'value': 5708844
            }, {
                'id': '3.134',
                'parent': '2.12',
                'name': 'Timor-Leste',
                'value': 1296311
            }, {
                'id': '3.135',
                'parent': '2.12',
                'name': 'Brunei',
                'value': 428697,
                'color': 'red'
            },
            // 第三圈 西亚 
            {
                'id': '2.14',
                'parent': '1.3',
                'name': '西亚' // Western Asia
            },
            // 第四圈 西亚包含的国家
            {
                'id': '3.145',
                'parent': '2.14',
                'name': 'Turkey',
                'value': 80745020
            }, {
                'id': '3.146',
                'parent': '2.14',
                'name': 'Iraq',
                'value': 38274618
            }, {
                'id': '3.147',
                'parent': '2.14',
                'name': 'Saudi Arabia',
                'value': 32938213
            }, {
                'id': '3.148',
                'parent': '2.14',
                'name': 'Yemen',
                'value': 28250420
            }, {
                'id': '3.149',
                'parent': '2.14',
                'name': 'Syria',
                'value': 18269868
            }, {
                'id': '3.150',
                'parent': '2.14',
                'name': 'Azerbaijan',
                'value': 9827589
            }, {
                'id': '3.151',
                'parent': '2.14',
                'name': 'Jordan',
                'value': 9702353
            }, {
                'id': '3.152',
                'parent': '2.14',
                'name': 'United Arab Emirates',
                'value': 9400145
            }, {
                'id': '3.153',
                'parent': '2.14',
                'name': 'Israel',
                'value': 8321570
            }, {
                'id': '3.154',
                'parent': '2.14',
                'name': 'Lebanon',
                'value': 6082357
            }, {
                'id': '3.155',
                'parent': '2.14',
                'name': 'Palestine',
                'value': 4920724
            }, {
                'id': '3.156',
                'parent': '2.14',
                'name': 'Oman',
                'value': 4636262
            }, {
                'id': '3.157',
                'parent': '2.14',
                'name': 'Kuwait',
                'value': 4136528
            }, {
                'id': '3.158',
                'parent': '2.14',
                'name': 'Georgia',
                'value': 3912061
            }, {
                'id': '3.159',
                'parent': '2.14',
                'name': 'Armenia',
                'value': 2930450
            }, {
                'id': '3.160',
                'parent': '2.14',
                'name': 'Qatar',
                'value': 2639211
            }, {
                'id': '3.161',
                'parent': '2.14',
                'name': 'Bahrain',
                'value': 1492584
            },
            // 第三圈 中亚 
            {
                'id': '2.10',
                'parent': '1.3',
                'name': '中亚' // Central Asia
            },
            // 第四圈 中亚包含的国家
            {
                'id': '3.112',
                'parent': '2.10',
                'name': 'Uzbekistan',
                'value': 31910641
            }, {
                'id': '3.113',
                'parent': '2.10',
                'name': 'Kazakhstan',
                'value': 18204499
            }, {
                'id': '3.114',
                'parent': '2.10',
                'name': 'Tajikistan',
                'value': 8921343
            }, {
                'id': '3.115',
                'parent': '2.10',
                'name': 'Kyrgyzstan',
                'value': 6045117
            }, {
                'id': '3.116',
                'parent': '2.10',
                'name': 'Turkmenistan',
                'value': 5758075
            },

            /***********/
            /* Europe 欧洲 */
            // 第三圈 东欧
            {
                'id': '2.15',
                'parent': '1.4',
                'name': '东欧' // Eastern Europe
            },
            // 第四圈 东欧包含的国家
            {
                'id': '3.162',
                'parent': '2.15',
                'name': 'Russia',
                'value': 143989754
            }, {
                'id': '3.163',
                'parent': '2.15',
                'name': 'Ukraine',
                'value': 44222947
            }, {
                'id': '3.164',
                'parent': '2.15',
                'name': 'Poland',
                'value': 38170712
            }, {
                'id': '3.165',
                'parent': '2.15',
                'name': 'Romania',
                'value': 19679306
            }, {
                'id': '3.166',
                'parent': '2.15',
                'name': 'Czechia',
                'value': 10618303
            }, {
                'id': '3.167',
                'parent': '2.15',
                'name': 'Hungary',
                'value': 9721559
            }, {
                'id': '3.168',
                'parent': '2.15',
                'name': 'Belarus',
                'value': 9468338
            }, {
                'id': '3.169',
                'parent': '2.15',
                'name': 'Bulgaria',
                'value': 7084571
            }, {
                'id': '3.170',
                'parent': '2.15',
                'name': 'Slovakia',
                'value': 5447662
            }, {
                'id': '3.171',
                'parent': '2.15',
                'name': 'Moldova',
                'value': 4051212
            }, {
                'id': '3.172',
                'parent': '2.15',
                'name': 'Cyprus',
                'value': 1179551
            },
            // 第三圈 北欧
            {
                'id': '2.16',
                'parent': '1.4',
                'name': '北欧' // Northern Europe
            },
            // 第四圈 北欧包含的国家
            {
                'id': '3.173',
                'parent': '2.16',
                'name': 'United Kingdom',
                'value': 66181585
            }, {
                'id': '3.174',
                'parent': '2.16',
                'name': 'Sweden',
                'value': 9910701
            }, {
                'id': '3.175',
                'parent': '2.16',
                'name': 'Denmark',
                'value': 5733551
            }, {
                'id': '3.176',
                'parent': '2.16',
                'name': 'Finland',
                'value': 5523231
            }, {
                'id': '3.177',
                'parent': '2.16',
                'name': 'Norway',
                'value': 5305383
            }, {
                'id': '3.178',
                'parent': '2.16',
                'name': 'Ireland',
                'value': 4761657
            }, {
                'id': '3.179',
                'parent': '2.16',
                'name': 'Lithuania',
                'value': 2890297
            }, {
                'id': '3.180',
                'parent': '2.16',
                'name': 'Latvia',
                'value': 1949670
            }, {
                'id': '3.181',
                'parent': '2.16',
                'name': 'Estonia',
                'value': 1309632
            }, {
                'id': '3.182',
                'parent': '2.16',
                'name': 'Iceland',
                'value': 335025
            }, {
                'id': '3.183',
                'parent': '2.16',
                'name': 'Guernsey and  Jersey',
                'value': 165314
            }, {
                'id': '3.184',
                'parent': '2.16',
                'name': 'Isle of Man',
                'value': 84287
            }, {
                'id': '3.185',
                'parent': '2.16',
                'name': 'Faroe Islands',
                'value': 49290
            },
            // 第三圈 南欧
            {
                'id': '2.17',
                'parent': '1.4',
                'name': '南欧' //  Southern Europe
            },
            // 第四圈 南欧包含的国家
            {
                'id': '3.186',
                'parent': '2.17',
                'name': 'Italy',
                'value': 59359900
            }, {
                'id': '3.187',
                'parent': '2.17',
                'name': 'Spain',
                'value': 46354321
            }, {
                'id': '3.188',
                'parent': '2.17',
                'name': 'Greece',
                'value': 11159773
            }, {
                'id': '3.189',
                'parent': '2.17',
                'name': 'Portugal',
                'value': 10329506
            }, {
                'id': '3.190',
                'parent': '2.17',
                'name': 'Serbia',
                'value': 8790574
            }, {
                'id': '3.191',
                'parent': '2.17',
                'name': 'Croatia',
                'value': 4189353
            }, {
                'id': '3.192',
                'parent': '2.17',
                'name': 'Bosnia and Herzegovina',
                'value': 3507017
            }, {
                'id': '3.193',
                'parent': '2.17',
                'name': 'Albania',
                'value': 2930187
            }, {
                'id': '3.194',
                'parent': '2.17',
                'name': 'Republic of Macedonia',
                'value': 2083160
            }, {
                'id': '3.195',
                'parent': '2.17',
                'name': 'Slovenia',
                'value': 2079976
            }, {
                'id': '3.196',
                'parent': '2.17',
                'name': 'Montenegro',
                'value': 628960
            }, {
                'id': '3.197',
                'parent': '2.17',
                'name': 'Malta',
                'value': 430835
            }, {
                'id': '3.198',
                'parent': '2.17',
                'name': 'Andorra',
                'value': 76965
            }, {
                'id': '3.199',
                'parent': '2.17',
                'name': 'Gibraltar',
                'value': 34571
            }, {
                'id': '3.200',
                'parent': '2.17',
                'name': 'San Marino',
                'value': 33400
            }, {
                'id': '3.201',
                'parent': '2.17',
                'name': 'Vatican City',
                'value': 792
            },
            // 第三圈 西欧
            {
                'id': '2.18',
                'parent': '1.4',
                'name': '西欧' // Western Europe
            }, 
            // 第四圈 西欧包含的国家
            {
                'id': '3.202',
                'parent': '2.18',
                'name': 'Germany',
                'value': 82114224
            }, {
                'id': '3.203',
                'parent': '2.18',
                'name': 'France',
                'value': 64979548
            }, {
                'id': '3.204',
                'parent': '2.18',
                'name': 'Netherlands',
                'value': 17035938
            }, {
                'id': '3.205',
                'parent': '2.18',
                'name': 'Belgium',
                'value': 11429336
            }, {
                'id': '3.206',
                'parent': '2.18',
                'name': 'Austria',
                'value': 8735453
            }, {
                'id': '3.207',
                'parent': '2.18',
                'name': 'Switzerland',
                'value': 8476005
            }, {
                'id': '3.208',
                'parent': '2.18',
                'name': 'Luxembourg',
                'value': 583455
            }, {
                'id': '3.209',
                'parent': '2.18',
                'name': 'Monaco',
                'value': 38695
            }, {
                'id': '3.210',
                'parent': '2.18',
                'name': 'Liechtenstein',
                'value': 37922
            },
            /***********/
            /* 大洋洲 Oceania */
            // 第三圈 澳大利亚和新西兰
            {
                'id': '2.19',
                'parent': '1.5',
                'name': 'Australia and New Zealand'
            },
            // 第四圈
            {
                'id': '3.211',
                'parent': '2.19',
                'name': '澳大利亚', // Australia
                'value': 24450561
            }, {
                'id': '3.212',
                'parent': '2.19',
                'name': 'New Zealand',
                'value': 4705818
            },
            {
                'id': '2.20',
                'parent': '1.5',
                'name': 'Melanesia'
            },
            {
                'id': '3.213',
                'parent': '2.20',
                'name': 'Papua New Guinea'
            }, {
                'id': '3.214',
                'parent': '2.20',
                'name': 'Fiji',
                'value': 905502
            }, {
                'id': '3.215',
                'parent': '2.20',
                'name': 'Solomon Islands',
                'value': 611343
            }, {
                'id': '3.216',
                'parent': '2.20',
                'name': 'New Caledonia',
                'value': 276255
            }, {
                'id': '3.217',
                'parent': '2.20',
                'name': 'Vanuatu',
                'value': 276244
            },
            {
                'id': '2.21',
                'parent': '1.5',
                'name': 'Micronesia'
            },
            {
                'id': '3.218',
                'parent': '2.21',
                'name': 'Guam',
                'value': 164229
            }, {
                'id': '3.219',
                'parent': '2.21',
                'name': 'Kiribati',
                'value': 116398
            }, {
                'id': '3.220',
                'parent': '2.21',
                'name': 'Federated States of Micronesia',
                'value': 105544
            }, {
                'id': '3.221',
                'parent': '2.21',
                'name': 'Northern Mariana Islands',
                'value': 55144
            }, {
                'id': '3.222',
                'parent': '2.21',
                'name': 'Marshall Islands',
                'value': 53127
            }, {
                'id': '3.223',
                'parent': '2.21',
                'name': 'Palau',
                'value': 21729
            }, {
                'id': '3.224',
                'parent': '2.21',
                'name': 'Nauru',
                'value': 11359
            },
            {
                'id': '2.22',
                'parent': '1.5',
                'name': 'Polynesia'
            },
            {
                'id': '3.225',
                'parent': '2.22',
                'name': 'French Polynesia',
                'value': 283007
            }, {
                'id': '3.226',
                'parent': '2.22',
                'name': 'Samoa',
                'value': 196440
            }, {
                'id': '3.227',
                'parent': '2.22',
                'name': 'Tonga',
                'value': 108020
            }, {
                'id': '3.228',
                'parent': '2.22',
                'name': 'American Samoa',
                'value': 55641
            }, {
                'id': '3.229',
                'parent': '2.22',
                'name': 'Cook Islands',
                'value': 17380
            }, {
                'id': '3.230',
                'parent': '2.22',
                'name': 'Wallis and Futuna',
                'value': 11773
            }, {
                'id': '3.231',
                'parent': '2.22',
                'name': 'Tuvalu',
                'value': 11192
            }, {
                'id': '3.232',
                'parent': '2.22',
                'name': 'Niue',
                'value': 1618
            }, {
                'id': '3.233',
                'parent': '2.22',
                'name': 'Tokelau',
                'value': 1300
            }
    ];
