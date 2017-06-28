var jsGameAPI = [
    [
        'Array.isArray()||判断是否为数组',
        'Array.from()||ES6将一个类数组对象或可遍历对象转换成真正的数组，返回数组的的实例',
        'Array.of()||ES6将它的任意类型的多个参数放在一个数组里并返回该数组',
        'Array.prototype.pop()||删除数组的最后一个元素，并返回这个元素',
        'Array.prototype.push()||在数组的末尾增加一个或多个元素，并返回数组的新长度length',
        'Array.prototype.reverse()||颠倒数组中元素的排列顺序',
        'Array.prototype.shift()||移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减1',
        'Array.prototype.unshift()||在数组的开头增加一个或多个元素，并返回数组的新的 length 值',
        'Array.prototype.sort()||对数组的元素做原地的排序，并返回排好序的原数组',
        'Array.prototype.splice()||在任意的位置给数组添加、删除、替换任意个元素',
        'Array.prototype.copyWithin()||ES6在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值',
        'Array.prototype.fill()||将数组中指定区间的所有元素的值，都替换成某个固定的值',
        'Array.prototype.concat()||将传入的数组或非数组值与原数组合并,组成一个新的数组并返回',
        'Array.prototype.join()||将数组中所有的数组元素转换成字符串，再用一个分隔符将这些字符串连接起来',
        'Array.prototype.slice()||浅复制(shallow copy)数组的一段到一个新的数组中，并返回这个新数组',
        'Array.prototype.toString()||返回一个由所有数组元素组合而成的字符串',
        'Array.prototype.toLocaleString()||返回一个由所有数组元素组合而成的本地化后的字符串',
        'Array.prototype.indexOf()||返回数组中第一个与指定值相等的元素的索引，否则返回 -1',
        'Array.prototype.lastIndexOf()||返回数组中最后一个与指定值相等的元素的索引，否则返回 -1',
        'Array.prototype.includes()||ES7判断当前数组是否包含某指定的值',
        'Array.prototype.forEach()||为数组中的每个元素执行一次回调函数',
        'Array.prototype.every()||如果数组中的每个元素都满足测试函数，则返回 true',
        'Array.prototype.some()||如果数组中至少有一个元素满足测试函数，则返回 true',
        'Array.prototype.filter()||将所有在过滤函数中返回 true的元素放进一个新数组中并返回',
        'Array.prototype.map()||返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组',
        'Array.prototype.reduce()||从左到右合并数组中的所有元素为一个值',
        'Array.prototype.reduceRight()||从右到左合并数组中的所有元素为一个值',
        'Array.prototype.entries()||ES6返回一个数组迭代器对象，该迭代器对象会包含所有数组元素的键值对',
        'Array.prototype.find()||ES6找到第一个满足测试函数的元素并返回那个元素的值',
        'Array.prototype.findIndex()||ES6找到第一个满足测试函数的元素并返回那个元素的索引',
        'Array.prototype.keys()||ES6返回一个数组迭代器对象，该迭代器会包含所有数组元素的键',
        'Array.prototype.values()||ES6返回一个新的迭代器对象，该迭代器会包含所有数组元素的值',
        'Array.prototype[@@iterator]()||ES6@@iterator属性返回数组的 iterator 方法，默认情况下与values()返回值相同'
    ],
    [
        'Math.E||欧拉常数，也是自然对数的底数, 约等于 2.718.',
                'Math.LN2||2的自然对数, 约等于0.693.',
                'Math.LN10||10的自然对数, 约等于 2.303.',
                'Math.LOG2E||以2为底E的对数, 约等于 1.443.',
                'Math.LOG10E||以10为底E的对数, 约等于 0.434.',
                'Math.PI||圆周率，一个圆的周长和直径之比，约等于 3.14159.',
                'Math.SQRT1_2||1/2的平方根, 约等于 0.707.',
                'Math.SQRT2||2的平方根,约等于 1.414.',
                'Math.ceil(x)||返回x向上取整后的整数值.',
                'Math.floor(x)||返回x向下取整后的整数值',
                'Math.round(x)||返回四舍五入后的整数.',
                'Math.sqrt(x)||返回x的平方根.如果参数 number 为负值，则 sqrt 返回 NaN。',
                'Math.tan(x)||返回x的正切值，x表示一个角（单位：弧度）',
                'Math.abs(x)||返回x的绝对值.传入一个非数字形式的字符串或者 undefined/empty 变量，将返回 NaN。传入null将返回 0。',
                'Math.sin(x)||返回一个 -1 到 1 之间的数值，表示给定角度（单位：弧度）的正弦值',
                'Math.acos(x)||返回一个数的反余弦值（单位为弧度）',
                'Math.asin(x)||返回一个数值的反正弦（单位为弧度）',
                'Math.atan(x)||返回一个数值的反正切（以弧度为单位），以介于 -PI/2 与 PI/2 弧度之间的数值来返回x的反正切值.',
                'Math.atan2(x, y)||返回 y/x 的反正切值. atan2 方法返回一个 -pi 到 pi 之间的数值，表示点 (x, y) 对应的偏移角度。',
                'Math.cos(x)||返回x的余弦值.返回一个 -1 到 1 之间的数值，表示角度（单位：弧度）的余弦值。',
                'Math.exp(x)||返回常数E的x次方, E 是欧拉常数 (2.718...), 自然对数的底.',
                'Math.log(x)||返回一个数的自然对数，如果指定的 number 为负数，则返回值为 NaN。',
                'Math.max()||返回0个到多个数值中最大值。',
                'Math.min()||返回0个到多个数值中最小值',
                'Math.pow(x,y)||返回x的y次幂.',
                'Math.random()||返回0到1之间的伪随机数（大于等于0，小于1），以当前时间为随机数种子',
                'Math.acosh(x)||ES6 返回x的反双曲余弦值.',
                'Math.asinh(x)||ES6 返回x的反双曲正弦值.',
                'Math.atanh(x)||ES6 返回 x 的反双曲正切值.',
                'Math.cbrt(x)||ES6 返回x的立方根.',
                'Math.clz32(x)||ES6 Returns the number of leading zeroes of a 32-bit integer.',
                'Math.cosh(x)||ES6返回x的双曲余弦值.',
                'Math.expm1(x)||ES6返回 exp(x)-1 的值.',
                'Math.fround(x)||ES6 Returns the nearest single precision float representation of a number.',
                'Math.hypot()||ES6 Returns the square root of the sum of squares of its arguments.',
                'Math.imul(x)||ES6 Returns the result of a 32-bit integer multiplication.',
                'Math.log1p(x)||ES6 Returns the natural logarithm of 1 + x (loge, also ln) of a number.',
                'Math.log10(x)||ES6 Returns the base 10 logarithm of x.',
                'Math.log2(x)||ES6 Returns the base 2 logarithm of x.',
                'Math.sign(x)||ES6 返回x的符号函数, 判定x是正数,负数还是0.',
                'Math.sinh(x)||ES6 返回x的双曲正弦值.',
                'Math.tanh(x)||ES6 返回x的双曲正切值.',
                'Math.trunc(x)||ES6 返回x的整数部分,去除小数.'
    ],
    [
        'Object.assign()||IE不支持,把任意多个的源对象sources自身的可枚举属性浅拷贝给目标对象，然后返回目标对象target',
                'Object.create()||IE9,创建一个拥有指定的原型对象proto和可选的属性描述符对象propertiesObject',
                'Object.defineProperty()||IE9精确地给对象obj添加或修改一个自有属性,详细指定该属性的配置对象，返回这个对象obj',
                'Object.defineProperties()||IE9 在一个对象obj上添加或修改一个或者多个自有属性,并分别指定它们的配置,返回该对象',
                'Object.getOwnPropertyDescriptor()||IE8 返回指定对象obj上一个自有属性对应的属性描述符对象prop,否则返回 undefined',
                'Object.keys()||IE9 返回一个数组，包含指定对象的所有自有可枚举的属性的名称',
                'Object.getOwnPropertyNames()||IE9 返回一个包含了指定对象所有自有的属性名的数组（包含不可枚举的属性）',
                'Object.getOwnPropertySymbols()||ES6 返回一个数组，它包含了指定对象自身所有的符号属性（symbol 属性键）',
                'Object.getPrototypeOf(obj)||IE9 返回指定对象obj的原型对象obj.prototype',
                'Object.is(value1, value2)||IE和Safari无 判断两个值是否严格相等',
                'Object.freeze(obj)||IE9 冻结对象：冻结对象obj的所有自身属性都不可能以任何方式被修改(不管是数据属性还是访问器属性)',
                'Object.isFrozen()||IE9有，但Opera无，判断对象是否已经冻结',
                'Object.isSealed()||IE9有，但Opera无，判断对象是否已经密封',
                'Object.isExtensible(obj)||IE9,判断对象是否可扩展（是否可以在它上面添加新的属性）',
                'Object.preventExtensions(obj)||IE9有,但Opera无,让一个对象变的不可扩展，也就是永远不能再添加新的属性',
                'Object.seal()||IE9有，但Opera无，密封对象以防属性被删除，不会影响从原型链上继承的属性',
                'Object.setPrototypeOf()||ES6 IE11 但Safari无，将一个指定的对象的原型设置为另一个对象或者null',
                'Object.values()||ES7 返回一个包含指定对象所有的可枚举属性值的数组',
                'Object.prototype.constructor||返回一个指向创建了该对象原型的函数引用',
                'Object.prototype.hasOwnProperty()||返回一个布尔值 ，用来判断某个对象是否含有指定的自身属性',
                'Object.prototype.isPrototypeOf()||返回一个布尔值，检测指定对象obj是否在本对象的原型链中',
                'Object.prototype.propertyIsEnumerable()||判断指定属性是否可枚举',
                'Object.prototype.toLocaleString()||直接调用 toString()方法。Array、Number、Date覆盖了 toLocaleString() 方法',
                'Object.prototype.toString()||返回对象的字符串表示',
                'Object.prototype.valueOf()||返回指定对象的原始值'
    ],
   [
        'String.fromCharCode()||根据指定的 Unicode 编码中的序号值来返回一个字符串，该方法返回一个字符串',
                'String.fromCodePoint()||ES6,使用指定的unicode参数返回一个primitive的字符串',
                'String.raw()||ES6,是一个模板字符串的标签函数，是用来获取一个模板字符串的原始字面量值的',
                'String.prototype.charAt()||返回字符的特定位置，index ：0~length-1。如果指定的值超出了该范围，则返回一个空字符串',
                'String.prototype.charCodeAt()||返回表示给定索引的字符的Unicode的值。是String.fromCharCode()方法的反操作',
                'String.prototype.concat()||将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回',
                'String.prototype.indexOf()||从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1',
                'String.prototype.lastIndexOf()||从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1',
                'String.prototype.localeCompare()||返回一个数字来表明调用该函数的字符串的排列顺序是否在某个给定的字符串的前面或者后面，或者一样',
                'String.prototype.match(regexp)||使用正则表达式与字符串相比较，返回一个包含匹配结果的数组，如果没有匹配项，则返回 null',
                'String.prototype.replace()||被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串',
                'String.prototype.search(regexp)||对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标',
                'String.prototype.slice()||摘取一个字符串区域(从beginSlice到endSlice，不含endSlice)，返回一个新的字符串',
                'String.prototype.split()||通过separator将字符串分离成子串，返回由子串组成的数组',
                'String.prototype.substr(start[, length])||返回字符串中从指定位置开始的指定长度的子字符串',
                'String.prototype.substring()||返回字符串两个索引之间（或到字符串末尾）的子串',
                'String.prototype.toLocaleLowerCase()||根据当前区域设置，将符串中的字符转换成小写',
                'String.prototype.toLocaleUpperCase()||根据当前区域设置，将字符串中的字符转换成大写',
                'String.prototype.toLowerCase()||将字符串转换成小写并返回',
                'String.prototype.toUpperCase()||将字符串转换成大写并返回',
                'String.prototype.toString()||返回用字符串表示的特定对象',
                'String.prototype.trim()||IE9,返回一个删除了字符串两端的空白字符的新字符串,含所有空格字符及所有的行结束符',
                'String.prototype.valueOf()||返回特定对象的原始值',
                'String.prototype.startsWith()||ES6 IE无 有Polyfill,判断字符串的起始位置是否匹配其他字符串中的字符',
                'String.prototype.endsWith()||ES6,判断当前字符串是否是以另外一个给定的子字符串“结尾”的',
                'String.prototype.codePointAt()||ES6,返回使用UTF-16编码的给定位置的值的非负整数',
                'String.prototype.includes()||ES6,判断一个字符串是否包含另一个子字符串，如果是返回true，否则返回false',
                'String.prototype.normalize()||ES6,返回调用字符串值的Unicode标准化形式',
                'String.prototype.repeat(count)||ES6 有Polyfill,构造并返回一个重复当前字符串若干次数的新字符串对象'
   ],
     [
        'Date.now()||IE9，返回自 1970-1-1 00:00:00  UTC (时间标准时间)至今所经过的毫秒数，类型为Number',
                'Date.parse()||解析一个表示日期的字符串,返回从1970-1-1 00:00:00所经过的毫秒数,参数不能解析为一个有效的日期,则返回NaN',
                'Date.UTC()||接受和构造函数最长形式的参数相同的参数(从2到7),并返回从1970-01-01 00:00:00 UTC开始经过的毫秒数,类型为Number',
                'Date.prototype.getDate()||根据本地时间返回指定日期对象的月份中的第几天（1-31）',
                'Date.prototype.getDay()||根据本地时间返回指定日期对象的星期中的第几天（0-6）',
                'Date.prototype.getTime()||返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，Number类型',
                'Date.prototype.getFullYear()||根据本地时间返回指定日期对象的年份，该方法返回一个1000 到9999的四位数字年份',
                'Date.prototype.getMonth()||根据本地时间返回指定日期对象的月份（0-11）',
                'Date.prototype.getHours()||根据本地时间返回指定日期对象的小时（0-23）',
                'Date.prototype.getSeconds()||根据本地时间返回指定日期对象的秒数（0-59）',
                'Date.prototype.getMinutes()||根据本地时间返回指定日期对象的分钟（0-59）',
                'Date.prototype.getMilliseconds()||根据本地时间返回指定日期对象的微秒（0-999）',
                'Date.prototype.getTimezoneOffset()||返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟',
                'Date.prototype.setDate(value)||根据本地时间为指定的日期对象设置月份中的第几天',
                'Date.prototype.setFullYear()||根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）',
                'Date.prototype.setHours()||根据本地时间为指定日期对象设置小时数,参数超出了合理范围，自动调整更新',
                'Date.prototype.setMilliseconds()||根据本地时间为指定日期对象设置毫秒数',
                'Date.prototype.setMinutes()||根据本地时间为指定日期对象设置分钟数',
                'Date.prototype.setMonth()||根据本地时间为指定日期对象设置月份',
                'Date.prototype.setSeconds()||根据本地时间为指定日期对象设置秒数',
                'Date.prototype.setTime()||通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间',
                'Date.prototype.getUTCDate()||以世界时为标准，返回一个指定的日期对象是一个月中的第几天，返回1到31的整数值',
                'Date.prototype.getUTCDay()||以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天',
                'Date.prototype.getUTCFullYear()||以世界时为标准,返回一个指定的日期对象的年份,该方法返回一个1000到9999的四位数字年份',
                'Date.prototype.getUTCHours()||以世界时为标准，返回一个指定的日期对象的小时数',
                'Date.prototype.getUTCMilliseconds()||以世界时为标准，返回一个指定的日期对象的毫秒数',
                'Date.prototype.getUTCMinutes()||以世界时为标准，返回一个指定的日期对象的分钟数',
                'Date.prototype.getUTCMonth()||以世界时为标准，返回一个指定的日期对象的月份，它是从0开始计数的(0代表一年的第一个月)',
                'Date.prototype.getUTCSeconds()||以世界时为标准，返回一个指定的日期对象的秒数',
                'Date.prototype.setUTCDate()||根据世界时设置 Date 对象中月份的一天 (1 ~ 31)',
                'Date.prototype.setUTCFullYear()||根据世界时设置 Date 对象中的年份（四位数字）',
                'Date.prototype.setUTCHours()||根据世界时设置 Date 对象中的小时 (0 ~ 23)',
                'Date.prototype.setUTCMilliseconds()||根据世界时设置 Date 对象中的毫秒 (0 ~ 999)',
                'Date.prototype.setUTCMinutes()||根据世界时设置 Date 对象中的分钟 (0 ~ 59)',
                'Date.prototype.setUTCMonth()||根据世界时设置 Date 对象中的月份 (0 ~ 11)',
                'Date.prototype.setUTCSeconds()||根据世界时设置 Date 对象中的秒钟 (0 ~ 59)',
                'Date.prototype.toDateString()||以人类易读（human-readable）的形式返回该日期对象日期部分的字符串',
                'Date.prototype.toISOString()||IE9，返回一个ISO(ISO 8601 Extended Format)格式的字符串YYYY-MM-DDTHH:mm:ss.sssZ',
                'Date.prototype.toJSON()||返回一个 JSON 格式字符串(使用 toISOString())，表示该日期对象的值',
                'Date.prototype.toLocaleDateString()||返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联',
                'Date.prototype.toLocaleString()||返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联',
                'Date.prototype.toLocaleTimeString()||返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联',
                'Date.prototype.toString()||返回一个表示该日期对象的字符串,总是返回一个美式英语日期格式的字符串',
                'Date.prototype.toTimeString()||以人类易读格式返回日期对象时间部分的字符串',
                'Date.prototype.toUTCString()||把一个日期对象转换为一个以UTC时区计时的字符串',
                'Date.prototype.valueOf()||返回从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期对象所代表时间的毫秒数'
     ],
     [
        'Number.EPSILON||IE Safari无，两个可表示(representable)数之间的最小间隔,EPSILON 属性的值接近于2的-52次方',
                'Number.MAX_SAFE_INTEGER||IE无，在 JavaScript 中最大的安全整数 (2的53次方 - 1)',
                'Number.MAX_VALUE||能表示的最大正数。最大的负数是 -MAX_VALUE，值接近于 1.79E+308',
                'Number.MIN_VALUE||能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)，值约为 5e-324',
                'Number.NaN||特殊的“非数字”值（Not-A-Number）。和 NaN 相同',
                'Number.NEGATIVE_INFINITY||特殊的负无穷大值，在溢出时返回该值。它和全局对象的 Infinity 属性的负值相同',
                'Number.POSITIVE_INFINITY||特殊的正无穷大值，在溢出时返回改值。它同全局对象 Infinity 属性的值相同',
                'Number.prototype||表示 Number 构造函数的原型',
                'Number.isNaN()||IE Safari无，用来检测传入的值是否是NaN.只有在参数是真正的数字类型，且值为NaN的时候才会返回true',
                'Number.isFinite()||IE Safari无,用来检测传入的参数是否是一个有穷数,和全局的isFinite()函数不同,只有真正的数字才有可能返回true',
                'Number.isInteger()||IE Safari无，确定传递的值类型是“number”，且是整数',
                'Number.isSafeInteger()||只有Firefox实现，用来判断传入的参数值是否是一个“安全整数”,处于-(2的53次方-1)和2的53次方-1之间的整数',
                'Number.parseFloat()||IE Safari无，把一个字符串解析成浮点数，和全局对象parseFloat()一样',
                'Number.parseInt()||IE Safari无，根据给定的进制数把一个字符串解析成整数，和全局对象parseInt()一样',
                'Number.prototype.toExponential(n)||将一个数转为科学计数法形式字符串',
                'Number.prototype.toFixed(x)||将一个数转为指定位数x的小数，返回这个小数对应的字符串(会进行四舍五入),位数x有效范围0到20',
                'Number.prototype.toLocaleString()||Returns a string with a language sensitive representation of this number',
                'Number.prototype.toPrecision(n)||用于将一个数转为指定位数n的有效数字的字符串，该方法执行的四舍五入不可靠',
                'Number.prototype.toString(radius)||用来将一个数值转为字符串形式.可选的参数radius，表示输出的进制，默认是10进制'
     ],
    [
        'RegExp.prototype.lastIndex||是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引',
                'RegExp.prototype.source||返回一个当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及标志字符',
                'RegExp.prototype.global||是否开启全局匹配，global 的值是布尔对象，如果使用了 "g" 标志，则返回 true',
                'RegExp.prototype.ignoreCase||在匹配字符串时是否要忽略字符的大小写。返回true或false，只读属性',
                'RegExp.prototype.multiline||是否开启多行模式匹配。返回true或false，只读属性',
                'RegExp.prototype.sticky||大部分浏览器还不支持，是否开启粘滞匹配',
                'RegExp.prototype.exec(str)||为指定的一段字符串str执行搜索匹配操作。它的返回值是一个数组或者 null',
                'RegExp.prototype.test(str)||测试当前正则是否能匹配目标字符串，返回 true 或 false',
                'RegExp.prototype.toString()||返回一个字符串，其值为该正则对象的字面量形式',
                '正则表达式中的特殊字符\\d||匹配基本拉丁字母表中的一个数字字符。等价于[0-9]',
                '正则表达式中的特殊字符\\D||匹配任意一个不是基本拉丁字母表中数字的字符。等价于[^0-9]',
                '正则表达式中的特殊字符\\w||匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]',
                '正则表达式中的特殊字符\\W||匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。等价于 [^A-Za-z0-9_]',
                '正则表达式中的特殊字符\\s||匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格',
                '正则表达式中的特殊字符\\S||匹配一个非空白符',
                '正则表达式中的特殊字符[\\b]||匹配一个退格符',
                '正则表达式中的特殊字符"."点号||匹配任意单个字符，但是换行符除外',
                '正则表达式中的特殊字符\\t||匹配一个水平制表符（tab）',
                '正则表达式中的特殊字符\\r||匹配一个回车符（carriage return）',
                '正则表达式中的特殊字符\\n||匹配一个换行符（linefeed）',
                '正则表达式中的特殊字符\\v||匹配一个垂直制表符（vertical tab）',
                '正则表达式中的特殊字符\\f||匹配一个换页符（form-feed）',
                '正则表达式中的特殊字符\\0||匹配一个 NUL 字符。不要在此后面跟小数点',
                '正则表达式中的特殊字符\\cX||X 是 A - Z 的一个字母。匹配字符串中的一个控制字符',
                '正则表达式中的特殊字符\\xhh||匹配编码为 hh （两个十六进制数字）的字符',
                '正则表达式中的特殊字符\\uhhhh||匹配 Unicode 值为 hhhh （四个十六进制数字）的字符',
                '正则表达式中的特殊字符\\ ||用来转义具有特殊意义的字符',
                '正则表达式中的字符集合[xyz] ||一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符"-"指定一个范围',
                '正则表达式中的字符集合[^xyz] ||一个反义或补充字符集，也叫反义字符组。也就是说，它匹配任意不在括号内的字符',
                '正则表达式中的边界字符^||匹配输入/字符串的开始。如果多行m标志被设为 true，该字符也会匹配一个断行符后的开始处',
                '正则表达式中的边界字符$||匹配输入/字符串的结尾。如果多行标志被设为 true，该字符也会匹配一个断行符的前的结尾处',
                '正则表达式中的边界字符\\b||匹配一个零宽单词边界, 如一个字母与一个空格之间',
                '正则表达式中的边界字符\\B||匹配一个零宽非单词边界, 如两个字母之间或两个空格之间',
                '正则表达式中的分组与反向引用(x)||匹配 x 并且捕获匹配项。 这被称为捕获括号',
                '正则表达式中的边界字符\\n||n 是一个正整数。一个反向引用，指向正则表达式中第n个括号（从左开始数）中匹配的子字符串',
                '正则表达式中的边界字符(?:x)||匹配 x 不会捕获匹配项。这被称为非捕获括号',
                '正则表达式中的数量词x*||匹配前面的模式 x 0次或多次',
                '正则表达式中的数量词x+||匹配前面的模式 x 1 或多次。等价于 {1,}',
                '正则表达式中的数量词x*?和x+?||像* 和 + 一样匹配前面的模式 x，然而匹配是最小可能匹配',
                '正则表达式中的数量词x?||匹配前面的模式 x 0次 或 1 次',
                '正则表达式中的数量词x(?=y) ||只有当 x 后面紧跟着 y 时，才匹配 x',
                '正则表达式中的数量词x(?!y) ||只有当 x 后面不是紧跟着 y 时，才匹配 x',
                '正则表达式中的数量词x|y ||匹配 x 或 y',
                '正则表达式中的数量词x{n} ||n 是一个正整数。前面的模式 x 连续出现 n 次时匹配',
                '正则表达式中的数量词x{n,} ||前面的模式 x 连续出现至少 n 次时匹配',
                '正则表达式中的数量词x{n,m} ||前面的模式 x 连续出现至少 n 次，至多 m 次时匹配'
    ]
];

//定义两个数组分别存放左侧的题目和右侧的答案
var leftArr = [], rightArr = [];
var beginX, beginY, endX, endY;
var leftBeCheckedObj, rightBeCheckedObj, leftAnswer, rightAnswer;

var globalConfig = {
    score: 0,
    heightScore: 0,
    grade: 1,
    progressWidth:196
}
//过关的时候，每一关对应的最低分
var jumpToNextScore = [3, 4, 5, 6, 7, 8, 9, 10];
//点击每一关的div把相应的题目添加到页面中
function handler(index) {
    //$('.progressContent').width(196);
    var leftInfo, rightInfo;
    globalConfig.grade = index+1;
    leftArr = [];
    rightArr = [];
    for (var i = 0 ; i < jsGameAPI[index].length; i++) {
        //只显示前十条
        if (i === 10) {
            break;
        }
        //首先把信息拆分一下
        var singleInfoArr = jsGameAPI[index][i].split('||');
        leftInfo = singleInfoArr[0];
        rightInfo = singleInfoArr[1];
        leftArr.push(leftInfo);
        rightArr.push(rightInfo);
    }
    addDomObjToHtml(sortArray(leftArr), sortArray(rightArr));
}

//这个方法是把所有的信息添加到页面中去。
function addDomObjToHtml(leftArr, rightArr) {
    //去除document绑定的两个鼠标的方法
    $(document).off('mousedown mouseup');
    if ($('.leftShowDiv').length !== 0 || $('.rightShowDiv').length !== 0) {
        $('.leftShowDiv').remove();
        $('.rightShowDiv').remove();
    }
    $('.gameList').addClass('hideFirst');
    var leftDom = $('<div class="leftShowDiv rowDiv"></div>');
    var rightDom = $('<div class="rightShowDiv rowDiv"></div>');
    var leftSingleDomObj, rightSingleDomObj;
    for (let j = 0; j < leftArr.length; j++) {
        leftSingleDomObj = $('<div class="inlineDiv">'
                            + '<span>' + leftArr[j] + '</span>'
                            + '</div>');
        rightSingleDomObj = $('<div class="inlineDiv">'
                            + '<span>' + rightArr[j] + '</span>'
                            + '</div>');
        addStyleOfClick(leftSingleDomObj, rightSingleDomObj);
        leftDom.append(leftSingleDomObj);
        rightDom.append(rightSingleDomObj);
    }
    $('.contentDiv').append(leftDom).append(rightDom)
                    .append('<canvas id="myCanvas" width="1200" height="565" style="position: absolute;top:35; left:0px;border:0px solid #000000;z-index:-1;"></canvas>')
                    .append('<canvas id="myBackCanvas" width="1200" height="565" style="position: absolute;top:35; left:0px;border:0px solid #000000;z-index:-2;"></canvas>');

    //addStyleOfClick();
    //清除画布中的直线，因为在一关游戏开始的时候那些直线还是存在的
    var myLastCanvas = $('#myBackCanvas')[0];
    var lastCtx = myLastCanvas.getContext("2d");
    lastCtx.clearRect(0, 0, 1200, 600);
    //开始计时
    timeOutObj = setInterval(function () { dealTimerDiv($('.progressContainer').width() / 60, globalConfig.grade-1) }, 1000);
    //给画布绑定鼠标托选时间
    $(document).on('mousedown', function (event) {
        event.preventDefault();
        var _this;
        //要把初始位置至空，因为要在后面判断是否是通过mousedown之后再调用的mouseup方法；
        beginX = 0;
        beginY = 0;
        //判断一下鼠标是否在div上面
        if (judgeDrawRange(event.pageX, event.pageY)) {

            //首先要判断是否在contentDiv中，在的话进行处理，不再的话不需要处理
            if ($(event.target).hasClass('leftBg') || $(event.target).parent().hasClass('leftBg')) {
                if ($(event.target).hasClass('leftBg')) {
                    _this = $(event.target);
                } else {
                    _this = $(event.target).parent();
                }
                leftBeCheckedObj = _this;
                //还要判断鼠标时候在相应的DIV的元素上面
                if (!_this.attr('isChecked')) {//这里的是如果没有被选中的话
                    _this.off('mouseover mouseout');
                    //_this.attr('isChecked', true);
                    $(document).on('mousemove', function (event) {
                        event.preventDefault();
                        beginX = getElementLeft(_this[0]) - getElementLeft($('#myCanvas')[0]) + _this[0].offsetWidth;
                        beginY = getElementTop(_this[0]) - getElementTop($('#myCanvas')[0]) + _this[0].offsetHeight / 2;
                        var myCanvas = $('#myCanvas')[0];
                        var ctx = myCanvas.getContext("2d");
                        ctx.clearRect(0, 0, 1200, 600);
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(beginX, beginY);
                        ctx.lineTo(event.pageX - 66, event.pageY - 35);
                        ctx.stroke();
                        ctx.restore();
                    });
                    //要把左侧的答案
                    leftAnswer = _this.find('span').html();
                } else {
                    //如果该元素已经被选中的话,不做任何处理
                }

            }
        }
    });


    //给document绑定松开事件，
    $(document).on('mouseup', function (event) {
        event.preventDefault();
        var _this;
        //首先进行判断是否是通过mousedown方法之后然后再调用这个方法的，没有的话就直接结束，有的话才继续执行下面的代码。
        if (beginX === 0 || beginY === 0) {
            return;
        }
        if ($(event.target).hasClass('rightBg') || $(event.target).parent().hasClass('rightBg')) {
            if ($(event.target).hasClass('rightBg')) {
                _this = $(event.target);
            } else {
                _this = $(event.target).parent();
            }
            //首先判断是否右侧的选项是否有选中的
            if (!_this.attr('isChecked')) {
                //没有被选中的话就可以划线了，
                _this.off('mouseover mouseout');
                
                endX = getElementLeft(_this[0]) - getElementLeft($('#myCanvas')[0]);
                endY = getElementTop(_this[0]) - getElementTop($('#myCanvas')[0]) + _this[0].offsetHeight / 2;
                var myCanvas = $('#myCanvas')[0];
                var myBackCanvas = $('#myBackCanvas')[0];
                var myCanObj = myCanvas.getContext('2d');
                var myBackObj = myBackCanvas.getContext('2d');
                myCanObj.clearRect(0, 0, 1200, 600);
                myBackObj.save();
                myBackObj.beginPath();
                myBackObj.moveTo(beginX, beginY);
                myBackObj.lineTo(endX, endY);
                myBackObj.stroke();
                myBackObj.restore();
                //画完了确定是已经被选中了，再添加选中标志
                leftBeCheckedObj.attr('isChecked',true);
                _this.attr('isChecked', true);
                //判断一下答案是否正确
                if (leftAnswer) {
                    rightAnswer = _this.find('span').html();
                    var answer = leftAnswer + '||' + rightAnswer;
                    //判断是否是符合项目中
                    if (checkAnswerOfAPI(answer)) {
                        //这里的答案要是正确的话处理分支
                        globalConfig.score++;
                    }
                    $('#scoreSpan').text(globalConfig.score);
                    if (globalConfig.heightScore < globalConfig.score) {
                        globalConfig.heightScore = globalConfig.score;
                        $('#heightSpan').text(globalConfig.heightScore);
                    }
                    $('gradeSpan').text(globalConfig.grade);
                }
            } else {
                //被选中的话就把左侧的元素的方法加上，然后删除画的线
                var myCanvas = $('#myCanvas')[0];
                var myCanObj = myCanvas.getContext('2d');
                myCanObj.clearRect(0, 0, 1200, 600);
                leftBeCheckedObj.removeClass('leftBg');
                leftBeCheckedObj.removeAttr('isChecked');
                addStyleOfClick(leftBeCheckedObj);

            }
            $(document).off('mousemove');
        } else {
            //如果最后没有停留在右侧的div中的话 就把document绑定的mousemove方法去掉，然后清除模拟划线的画布，然后再把左侧元素的是否选中属性移除，和选中的样式也移除
            $(document).off('mousemove');
            var myCanvas = $('#myCanvas')[0];
            var myCanObj = myCanvas.getContext('2d');
            myCanObj.clearRect(0, 0, 1200, 600);
            leftBeCheckedObj.removeClass('leftBg');
            leftBeCheckedObj.removeAttr('isChecked');
            addStyleOfClick(leftBeCheckedObj);
        }
    });
}


//定义一个方法来给相应的左侧和右侧的inlineDiv添加选中的样式

function addStyleOfClick(elementLeft, elementRight) {
    //然后再给每一个元素绑定一个onMouseOver方法，用于后面判断鼠标是否在这个元素的上面；
    if (elementLeft) {
        elementLeft.on('mouseover mouseout', function (event) {
            if (event.type === 'mouseover') {
                elementLeft.addClass('leftBg');
            } else {
                elementLeft.removeClass('leftBg');
            }

        });
    }

    if (elementRight) {
        elementRight.on('mouseover mouseout', function (event) {
            if (event.type === 'mouseover') {
                elementRight.addClass('rightBg');
            } else {
                elementRight.removeClass('rightBg');
            }
        });
    }

}

//定义一个方法来随机排序数组中的每一项。
function sortArray(Arr) {
    Arr.sort(function () {
        if (Math.random() > 0.5) {
            return -1;
        } else {
            return 1;
        }
    });
    return Arr;
}

function judgeDrawRange(theX, theY) {
    var startX = $('.contentDiv').position().left;
    var startY = $('.contentDiv').position().top;
    var stopX = $('.contentDiv').width() + startX;
    var stopY = $('.leftShowDiv').height() + startY;

    if (theX > startX && theX < stopX && theY > startY && theY < stopY) {
        return true;
    } else {
        return false;
    }
}

//定义一个方法来判断答案是否正确
function checkAnswerOfAPI(answer) {
    for (let k = 0 ; k < jsGameAPI.length; k++) {
        for (let m = 0 ; m < jsGameAPI[k].length; m++) {
            if (jsGameAPI[k][m].indexOf(answer) !== -1) {
                return true;
            }
        }
    }
    return false;
}

//获取元素的绝对位置(left)
function getElementLeft(element) {
    var elementLeft = element.offsetLeft;
    var parentEle = element.offsetParent;
    while (parentEle !== null) {
        elementLeft += parentEle.offsetLeft;
        parentEle = parentEle.offsetParent;
    }
    return elementLeft;
}

//获取元素的绝对位置(top)
function getElementTop(element) {
    var elementTop = element.offsetTop;
    var parentEle = element.offsetParent;
    while (parentEle !== null) {
        elementTop += parentEle.offsetTop;
        parentEle = parentEle.offsetParent;
    }
    return elementTop;
}

//这个方法用来判断是否跳转到下一关或者是直接给一个提示退出
function ifJumpNext(index) {
    console.log(1111);
    //判断一下分数，如果分数够了的话在往下走
    debugger;
    if (globalConfig.score < jumpToNextScore[index]) {
        //提示分数不够进入下一关
        alert('分数不够！！');
        return false;
    }

    if (globalConfig.grade === $('gameList').length - 1) {
        //说明已经最后一关了，弹窗提示成绩，并且退回到首页继续游戏，有待扩展
        alert('已经是最后一关了!!!');
        return false;
    }
    //没有的话就要跳转到下一关
    //$($('.gameList')[index + 1]).click();这样写的话会重复生成定时函数就没有办法进行去除，
    //首先去除原来的东西用最新的替换
    handler(index + 1);
    return true;
    //然后是计时的问题，
    //$('.progressContent').width($('.progressContainer').width());

}
var times = 0;
var timeoutObj = null;
//定义一个function来控制时间流逝
function dealTimerDiv(everyWidth, index) {
    //调用定时函数的次数
    var widthOfProgress = $('.progressContent').width();
    if (widthOfProgress <= 0) {
        //说明游戏结束，然后要判断一下分数是不是达到对应的及格分数了
        clearInterval(timeOutObj);
        if( ifJumpNext(index)){
            resetGlobalConfig(index);
        }
        
        return;
    }
    $('.progressContent').width(widthOfProgress - everyWidth);
}

//重置页面中的显示的变量，用于下次跳转的时候

function resetGlobalConfig(index) {
    console.log(2222);
    globalConfig.score = 0;
    //globalConfig.grade = index;
    $('#scoreSpan').text(globalConfig.score);
    $('#gradeSpan').text(globalConfig.grade);
    $('.progressContent').width(globalConfig.progressWidth);

}

$(function () {
    //获取是第几关的dom对象
    var domScreeningArr = $('.gameList');
    domScreeningArr.each(function (index, element) {
        element.addEventListener('click', function () {
            handler(index);
            //计时开始
            
            //dealTimerDiv(everyWidth,index);
            //var timeOutObj = setTimeout(dealTimerDiv, 1000);
            
        }, false);
    });






});

