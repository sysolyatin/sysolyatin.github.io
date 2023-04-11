---
layout: post
title:  "Синтаксис опций команд в grandMA2"
popular: true
---
Все, кто пользовался пультами grandMA2 знают, что документация, представленная на сайте производителя даже близка не показывает всех возможностей пульта. Особенно сильно в ней упустили работу с макросами и командной строкой, а ведь большая часть команд в пульте имеют ряд специальных опций, позволяющих сделать что-то очень нужное и полезное. В этой статье я постараюсь рассказать об этих опциях.

Я не буду подробно расписывать значение каждой опции, например, что такое wings у эффекта  или autostart у экзекьютора. Про это как раз в официальной документации подробно рассказано. Тут больше будет именно про то, как применять эти опции из командной строки и макросов.

Статья не претендует на авторский материал. В ней я постарался собраться информацию из документации, различных статей и форумов в интернете, что-то взял из своего опыта и постарался систематизировать и объединить по смысловым разделам.

### Опции команды Assign для эффектов

В общем и целом редактирование эффекта из командной строки выглядит примерно так:

```
Assign Effect x /attack=5 /blocks=2 /wings=2
```

**x** &#8212; в данном случае &#8212; это номер эффекта. Если нужно обратиться к конкретной строке в эффекте, то нужно использовать нумерацию вида **1.x.y**, где **x** &#8212; номер эффекта в пуле, а **y** &#8212; номер строки.

Далее рассмотрим все варианты опций, доступных для эффектов:


```
/attack=0..100 - работает только с формами Random, PWM или Chase
/blocks=0..9999 - можно использовать =none, это аналогично =0
/decay=0..100 - работает только с формами Random, PWM или Chase
/dir=
    >
    >bounce
    <
    <bounce
/groups=0..9999 - можно использовать =none, это аналогично =0
/highvalue=-9999..9999
/interleave=
    none
    odd или even
    "1 of 3" или  "2 of 3" или  "3 of 3"
    "1 of 4" или  "2 of 4" или  "3 of 4" или "4 of 4"
/lowvalue=-9999..9999
/mode=rel/abs - переключение режима работы между относительным и абсолютным
/phase=-2879..2879 - используйте две точки .. для обозначения thru (например, =0..360 установит фазу 0 thru 360)
/rate=0..256
/singleshot=yes/no
/speed=0..256
/speedgroup=none или "Speed x" или "Rate y"
/width=0..100 - не работает с формой Chase
/wings=-9999..9999 - можно использовать =none, это аналогично =0
```

Как вы могли заметить, в списке нет самого главного параметра эффекта &#8212; его формы.

Она назначается эффекту из пула форм командой:

```
Assign Form x At Effect y 
```

Ещё можно к эффекту добавить строчку, или изменить существующую. Для этого нужно назначить атрибут на номер строки в эффекте:

```
Assign Attribute "dim" Effect 1.1.1
```

### Опции команды Assign для экзекьюторов

В общем и целом редактирование экзекьютора из командной строки выглядит примерно так:

```
Assign Executor x.y /chaser=on /offtime=2
```

**x** &#8212; в данном случае &#8212; это номер страницы, а **y** &#8212; номер экзекьютора на этой странице. 

Далее рассмотрим все варианты доступных опций:

```
/autofix=on/off
/autostart=on/off 
/autostomp=on/off
/autostop=on/off 
/chaser=on/off
/crossfade=on/off 
/cmddisable=on/off 
/effectspeed=on/off
/ignoreexectime = on/off
/killprotect=on/off 
/mastergo=off/on/go/top 
/mibalways=on/off
/mibnever=on/off 
/offtime=z 
/ooo=on/off - параметр Off On Overwriten
/playbackmaster=0..50
/prepos=on/off 
/priority=
    low (или 6)
    normal (или 5)
    high (или 4)
    htp (или 3)
    swap (или 2)
    super (или 0)
/ratemaster=0..16
/restart=
    first
    current
    next
/softltp=on/off
/speed=
    mul2/mul4/mul8/mul16/mul32
    normal
    div2/div4/div8/div16/div32
/speedmaster=0..16
/swopprotect=on/off
/triggerisgo=on/off
/width=1..5
/wrap=on/off
```


### Опции команды Assign для секвенций

В общем и целом редактирование секвенции из командной строки выглядит примерно так:

```
Assign Sequence x /name="Test"
```

**x** &#8212; в данном случае &#8212; это номер секвенции. Далее рассмотрим все варианты доступных опций:


```
/cuezero=
    off - выключить Cue Zero
    on - включить Cue Zero для всех атрибутов
    "dimmers only" - включить Cue Zero для диммера
    all - включить Cue Zero для всех атрибутов
    effects - включить Cue Zero и добавить стомп ко всем атрибутам
/cuezeroextract=on/off - сохраняет текущие значения по умолчанию в Cue Zero для защиты от последующих изменений значений по умолчанию.
/forcedpos.mode=pt/xyz/none
/info="text"
/name="text"
/releasefirststep=on/off 
/track=on/off - трекинг в секвенции
```

### Опции команды Assign для cue

В общем и целом редактирование cue из командной строки выглядит примерно так:

```
Assign Cue x /name="Test"
```

**x** &#8212; в данном случае &#8212; это номер cue. Далее рассмотрим все варианты доступных опций:


```
/ae=on/off - перезапускать эффекты при старте cue
/cmd="command ; command ; etc."
/forcedpos.mode=pt/xyz/none
/info="text"
/lcount=0+ или infinite - количество повторений
/loop=[номер cue из секвенции] или none
/ltime=0+ или  infinite
/mib=none/early/late/[cue#]
/mode=normal/break/x-break/assert/x-assert/release
/name="text"
/trig=go/time/follow/sound/bpm/smpte/midi
/trigtime=y
/delay_<preset type>=y
/fade_<preset type>=y 
```

### Опции команды Assign для таймкода

В общем и целом редактирование таймкода из командной строки выглядит примерно так:

```
Assign Timecode x /slot=0
```

**x** &#8212; в данном случае &#8212; это номер таймкода. Далее рассмотрим все варианты доступных опций:

```
/autostart=on/off
/info="text"
/length=y - установка продолжительности таймкода в формате 1h2m3.45s или 1:2:3.45
/name="text"
/offset=y - смещение в формате в формате 1h2m3.45s или 1:2:3.45
/runs= - количество циклов воспроизведения (только для внутренних часов), для бесконечности использовать значение 0
/slot=
    "intern" (или -1)
    "link selected" (или 0)
    1..8
/statuscall=on/off
/switchoff=
    "playbacks off"`
    "keep playbacks"`
/timeunit=
    "1/100 sec"
    "30 fps"
    "25 fps"
    "24 fps"
/whenending=stop или pause - что произойдет при завершении времени  (только для внутренних часов)
/whenstopping=
    "do nothing"
    rewind
```

### Опции команды Appearance

В общем и целом Appearance из командной строки выглядит примерно так:

```
Appearance Object /red=100 /green=100 /blue=100 
```

**Object** &#8212; в данном случае &#8212; это имя объекта, который нужно разукрасить. Далее рассмотрим все варианты доступных опций:

```
/blue /b = 0..100
/brightness /br = 0..100
/green /g = 0..100
/hue /h = 0..360
/red /r = 0..100
/reset
/saturation /s = 0..100
```

### Опции команды Store


```
Store /effects /keepactive /merge /noconfirm /overwrite /remove

/effects /ef=true/false
/keepactive /ka=true/false
/merge /m 
/noconfirm /nc
/overwrite /o
/remove /r
/source /so=
    prog 
    output
    "DMX in"
/useselection /use=
    active
    allforselected
    activeforselected
    all
    look
/values /v=true/false
/valuetimes /vt=true/false

```

```
Store Cue x /add /cueonly /status /statusmerge /release /trackingshield

/add /a
/cueonly /co=true/false
/release /rel 
/status
/statusmerge /sm
/trackingshield /ts

```

```
Store Preset x /auto /embedded /global /presetfilter /selective /universal

/auto
/embedded /e=true/false 
/global /g 
/presetfilter /pf=true/false
/selective /s 
/universal /u 
```

```
Store View x /screen=1..6
```

```
Store Layout n /x="a" /y="a"
```

### Опции настроек консоли

**Глобальные** настройки в общем и целом редактируются так:

```
Assign Root 3.1 (или Root "Settings"."Global") /Remotes="Login Enabled" 
```

Далее рассмотрим все варианты доступных опций:

```
/Agenda = Running/Stopped
/Wysiwyg = On/Off
/ForceLogin = On/Off 
/EnableRDM = On/Off 
/Remotes = "Login Disabled" / "Login Enabled" 
/Telnet = "Login Disabled" / "Login Enabled"
/SelectedTimecodeSlot = 1..8
```

**Локальные** настройки в общем и целом редактируются так:

```
Assign Root 3.2 (или Root "Settings"."Local") /DefaultLanguage="English" 
```

Далее рассмотрим все варианты доступных опций:

```
/DefaultLanguage = English/German
/NetworkDMXifAlone = On/Off
/ShowReleaseNotesonStart = On/Off
/FlashingerrorLED,onwrongFaderposition = On/Off 
/ExecCLI = On/Off 
/DefaultGo,Goback,PauseCLI = On/Off
/IntensityBtnBackground = 0..79 
/IntensityBtnHighlight = 0..255
/IntensityExecLED = 0..255
/IntensityDeskLamp = 0..255
/Intensity9Inch = 0..255
/Intensity15Inch = 91..255
/DesklockBackground = "Black" / "Image Pool Picture" / "Current Desk UI"
```

Настройки **шоу** в общем и целом редактируются так:

```
Assign Root 3.3 (или Root "Settings"."Show") /XfadeReload=On 
```

Далее рассмотрим все варианты доступных опций:

```
/Off = 0s..23h59m59s 
/GoBack = "cuetiming" или 0s..23h59m59s 
/Goto = "cuetiming" или 0s..23h59m59s 
/GoFast = 0s..23h59m59s 
/MIBDelay = 0s..23h59m59s
/MIBFade = 0s..23h59m59s
/Startup = "команды, выполняемые после загрузки шоу"
/XfadeReload = On/Off
/TimecodeRecordSingleUser = On/Off
/KillwithOffTime = On/Off
```

### Опции для MA Network Configuration

**Console**

```
Assign Root 5.1.x (или Root "NetConfig"."Console".x) /опции
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:


```
/XLR_номер = "In u" / "Out u" / "Off"; u  - номер юниверса (1..256)
/DHCPEthercon1(Eth0) = yes/no
/MIDITC =
    -1 or "Off"
    0..7 or "TC Slot 1..8"
/SMPTETC =
    -1 or "Off"
    0..7 or "TC Slot 1..8"
/AnalogOffset = 0..48
/MIDIOffset = -1023..1023

```


**onPC**

```
Assign Root 5.2.x (или Root "NetConfig"."onPC".x) /опции
```




**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:


```
/XLR_номер = "In u" / "Out u" / "Off"; u  - номер юниверса (1..256). Будет применено ко всем крыльям. 
    Для управления XLR дырками определенного крыла нужно использовать изначальное обращение к устройству 
    с ещё одной цифрой после точки: Assign Root 5.2.x.y
    y - в данном случае будет номер крыла (1 - Command, 2 - Fader1, 3 - Fader2)
/MIDITC =
    -1 or "Off"
    0..7 or "TC Slot 1..8"
/SMPTETC =
    -1 or "Off"
    0..7 or "TC Slot 1..8"
/AnalogOffset = 0..48
/MIDIOffset = -1023..1023
```

**NPU**

```
Assign Root 5.3.x (или Root "NetConfig"."NPU".x) /опции
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:

```
/XLR_номер = "In u" / "Out u" / "Off"; u  - номер юниверса (1..256)
/DHCPEthercon1(Eth0) = yes/no
/SessionMember = yes/no
```

**MA3D**

```
Assign Root 5.4.x (или Root "NetConfig"."3D".x) /опции
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:

```
/SessionMember = yes/no
/User= "username"
```

**VPU**

```
Assign Root 5.5.x (или Root "NetConfig"."VPU".x) /опции
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:

```
/SessionMember = yes/no
/Layer = "layer name"
/Content =
    0
    1 / "Receiver"
    2 / "Distributor
/BackupVPU = yes/no
```

**MA DMX Node**

```
Assign Root 5.7.x (или Root "NetConfig"."DMX Node".x)
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:


```
/XLR_номер = "In u" / "Out u" / "Off"; u  - номер юниверса (1..256)
/DHCPEthercon1(Eth0) = yes/no
/Hostname = "название"
/SessionID/Network = 1..31 / "no session"
/Mode = "MA-Net2" / "sACN" / "Art-Net" / "None"`
/LightMode = "Display" / "Dark"`
/Local = on/off `
/Remote = on/off`
```

**MA Network Switch**

```
Assign Root 5.8.x (или Root "NetConfig"."Network Switch".x)
```

**x** в данном случае &#8212; &#171;Hostname&#187; или номер строки с устройством. Если написать * то, будет применено ко всем устройствам этого раздела. Доступные опции:

```
/DHCPclientenabled = yes/no
/Hostname = "название"
/SwitchID = 0..999
```

### Опции для настроек сетевых протоколов

**Art-Net**

```
Assign Root 4.1 (или Root "DMX_Protocols"."Art-Net") /OutActive=on/off /InActive=on/off
Assign Root 4.1.x (или Root "DMX_Protocols"."Art-Net".x) /опции
```

**x** в данном случае &#8212; номер строки в таблице с указанным протоколом. Доступные опции:

```
/Requested = yes/no
/Mode = Input/OutputAuto/OutputBroadcast/OutputUnicast
/DestinationIP = "IP адрес", только для OutputUnicast
/LocalStart = 1..256
/Amount = 1..256 
/Network = 1..128
/Subnet = 0..F
/Universe = 0..F 
/Delay(ms) = 0..5
/Info = "любой текст, например о расположении артгейта"
```

**sACN**

```
Assign Root 4.4 (или Root "DMX_Protocols"."sACN") /OutActive=on/off /InActive=on/off
Assign Root 4.4.x (или Root "DMX_Protocols"."sACN".x) /опции
```

**x** в данном случае &#8212; номер строки в таблице с указанным протоколом. Доступные опции:

```
/Requested = yes/no
/Mode = InputMulticast/InputUnicast/OutputMulticast/OutputUnicast
/DestinationIP = "IP адрес", только для OutputUnicast
/LocalStart = 1..256
/Amount = 1..256 
/sACNUniverse = 1..64000
/Priority = 0..200
/Protocol = Draft/Final
/TTL = 0..255;
/Delay(ms) = 0..5
/Info = "любой текст"
```

**Kinet1**

```
Assign Root 4.6 (или Root "DMX_Protocols"."Kinet1") /OutActive=on/off
Assign Root 4.6.x (или Root "DMX_Protocols"."Kinet1".x) /опции
```

**x** в данном случае &#8212; номер строки в таблице с указанным протоколом. Доступные опции:

```
/LocalStart = 1..256
/Amount = 1..256
/ExternStart = 0..255
/IPAddress ="IP адрес"
/Info = "любой текст"
```

**ETC Net2**

```
Assign Root 4.2 (или Root "DMX_Protocols"."ETC Net2") /опции
```

Доступные опции:

```
/Active = on/off
/LocalStart = 1..256
/Amount = 1..64
/ExternStart = 1..64
/Groups = 1..6
/Priority = 1..20
/TTL = 0..255
/Info = "любой текст"
```