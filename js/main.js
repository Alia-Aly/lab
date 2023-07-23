function hiden() {
    var bar = document.getElementById("hidden");
    if(bar.style.display == "block"){
        bar.style.display = "none";
    }else{
        bar.style.display = "block";
    }
}
// ////////////////////////////////////السعرات الحرارية ///////////////////////////////////
function calory(){
    var age = document.getElementById("age");
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");

    var type = document.getElementById("type");

    if(type.value == "ذكر"){
        var result1 = (weight.value*10)+(height.value*6.25)-(age.value*5)+5;
        document.getElementById("calory-result").innerHTML = result1 +"سعرة حرارية";
    }else if (type.value == "انثى"){
        var result2 =(weight.value*10)+(height.value*6.25)-(age.value*5)-161;
        document.getElementById("calory-result").innerHTML = result2 +"سعرة حرارية";
    }else{
        document.getElementById("calory-result").innerHTML = "not found"    }
}
// ////////////////////////////////////حرق السعرات الحرارية ///////////////////////////////////
function calory0(){
    var age = document.getElementById("age");
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");

    var type = document.getElementById("type");
    var activ = document.getElementById("active");

    var result11 = (weight.value*10)+(height.value*6.25)-(age.value*5)+5;
    var result12 =(weight.value*10)+(height.value*6.25)-(age.value*5)-161;

if(type.value == "ذكر"){
    if (activ.value == "الخمول") {
        document.getElementById("calory-result").innerHTML = (result11 *1.2 )+ "عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if (activ.value == "قليل النشاط") {
        document.getElementById("calory-result").innerHTML = (result11 *1.375) +"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if( activ.value == "معتدل النشاط"){
        document.getElementById("calory-result").innerHTML = (result11 *1.55) +"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if(activ.value == "نشيط"){
        document.getElementById("calory-result").innerHTML = (result11 *1.725)+"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if( activ.value == "نشيط جدا"){
        document.getElementById("calory-result").innerHTML = (result11 *1.9)+"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }
}else if(type.value == "انثى"){
    if (activ.value == "الخمول") {
        document.getElementById("calory-result").innerHTML = (result12 *1.2 )+ "عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if (activ.value == "قليل النشاط") {
        document.getElementById("calory-result").innerHTML = (result12 *1.375) +"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if( activ.value == "معتدل النشاط"){
        document.getElementById("calory-result").innerHTML = (result12 *1.55) +"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if(activ.value == "نشيط"){
        document.getElementById("calory-result").innerHTML = (result12 *1.725)+"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }else if( activ.value == "نشيط جدا"){
        document.getElementById("calory-result").innerHTML = (result12 *1.9)+"عدد السعرات الحرارية التى خسرتها هذا اليوم";
    }
}else{
    document.getElementById("calory-result").innerHTML = "not found"  ;
}
}
// /////////////////////////////////////////////////الكتلة /////////////////////////////////////
function block(){
    var bloc_heigh = document.getElementById("bloc-height").value /100;
    var bloc_weigh = document.getElementById("bloc-weight");
    var result_bloc  = (bloc_weigh.value)/(bloc_heigh*bloc_heigh);
    document.getElementById("bloc-result").innerHTML = " مؤشر كتلة الجسم" +" " +result_bloc ;
    if(result_bloc < 16){
        document.getElementById("bloc-range").innerHTML = "نحافة شديدة";
    }else if (result_bloc < 17) {
        document.getElementById("bloc-range").innerHTML = "نحافة معتدلة";
    }else if (result_bloc < 18.5) {
        document.getElementById("bloc-range").innerHTML = "نحافة خفيفة";
    }else if (result_bloc < 25) {
        document.getElementById("bloc-range").innerHTML = "الوزن الطبيعى";
    }else if (result_bloc < 30) {
        document.getElementById("bloc-range").innerHTML = "زيادة فى الوزن";
    }else if (result_bloc < 35) {
        document.getElementById("bloc-range").innerHTML = "السمنة من الفئة الاولى";
    }else if (result_bloc < 40) {
        document.getElementById("bloc-range").innerHTML = "السمنة من الفئة الثانية";
    }else{
        document.getElementById("bloc-range").innerHTML = "السمنة من الفئة الثالثة";
    }
}
// ////////////////////////////////////معدل نبضات القلب//////////////////////////////////////
function heart(){
    h_range = document.getElementById("heart-age");
    h_result = 220 - h_range.value;

    document.getElementById("heart-result").innerHTML = h_result;
}
// ////////////////////////////////نمو الطفل //////////////////////////////////////////////////
function child(){
    var kid_age = document.getElementById("child-age");
    var kid_height = document.getElementById("child-height");
    var kid_weight = document.getElementById("child-weight");

    var kid_result1 = (kid_age.value * 5) + 80; //الطول المثالى
    var kid_result2 = kid_height.value - 100; //الوزن المثالى

    if (kid_result1 == kid_height.value) {
        document.getElementById("child-result").innerHTML ="الطول  و الوزن مثالى";
    }else if( kid_result2 == kid_weight.value){
        document.getElementById("child-result").innerHTML ="الوزن مثالى";
    }else{
        document.getElementById("child-result").innerHTML ="مثالى الى حد ما اذا كنت ترى اى خلل فى خلال الاشهر القادمة يرجى استشارة طبيب";
    }

}
// /////////////////////////////////الكوليسترول////////////////////////////////////////////////
function colistrol(){
    var age2 = document.getElementById("col-age");
    var ratio = document.getElementById("col-ratio");

    if(age2.value < 19 && ratio.value < 170) {
        document.getElementById("colist-result").innerHTML ="المستوى طبيعى";
    }else if(age2.value < 19 && ratio.value < 199){
        document.getElementById("colist-result").innerHTML =" الحد الاقصى للمستوى الطبيعى" ;
    }else if( age2.value < 19 && ratio.value > 199){
        document.getElementById("colist-result").innerHTML =" المستوى مرتفع";
    }else if(age2.value < 24 && ratio.value < 190) {
        document.getElementById("colist-result").innerHTML ="المستوى طبيعى";
    }else if(age2.value < 24 && ratio.value < 224){
        document.getElementById("colist-result").innerHTML =" الحد الاقصى للمستوى الطبيعى" ;
    }else if(age2.value < 24 && ratio.value > 224){
        document.getElementById("colist-result").innerHTML =" المستوى مرتفع";
    }else{
        document.getElementById("colist-result").innerHTML =" حاول مرة اخرى ";
    }
}
// ////////////////////////////////////////////////الانيميا ///////////////////////////////////////////
function hemo() {
    var hemo_type = document.getElementById("hemog-type");
    var hemog = document.getElementById("hemog-range");
    if (hemo_type.value == "ذكر" && hemog.value < 13 ) {
       document.getElementById("hemog-result").innerHTML ="اقل من المعدل الطبيعى";
    }else if (hemo_type.value == "ذكر" &&   hemog.value < 16.5 ) {
       document.getElementById("hemog-result").innerHTML =" المعدل الطبيعى";
    }else if (hemo_type.value == "انثى" && hemog.value < 12 ) {
       document.getElementById("hemog-result").innerHTML ="اقل من المعدل الطبيعى";
    }else if (hemo_type.value == "انثى" &&   hemog.value < 16 ) {
       document.getElementById("hemog-result").innerHTML =" المعدل الطبيعى";
    }else {
       document.getElementById("hemog-result").innerHTML =" المعدل مرتفع";
    }
}
// ///////////////////////////////////////////////السكر////////////////////////////////////////////////////////
function suga() {
    var sugar = document.getElementById("suga-range");
    if (sugar.value < 97) {
        document.getElementById("suga-result").innerHTML = "غير مصاب بالسكرى";
    }else if(sugar.value < 126){
        document.getElementById("suga-result").innerHTML = "معرض للاصابة بالسكرى";
    }else if(sugar.value < 152){
        document.getElementById("suga-result").innerHTML = "مصاب بالسكرى";
    }else if(sugar.value < 355){
        document.getElementById("suga-result").innerHTML = "مصاب بالسكرى مع عدم التحكم بالمستويات";
    }else{
        document.getElementById("suga-result").innerHTML = "مصاب بالسكرى بنسبة كبيرة يرجى استشارة طبيب فى الحال";
    }
}
// ////////////////////////////////////سرعة الترسيب/////////////////////////////////////////
function esr() {
    var Esr = document.getElementById("esr-range");
    var esr_type = document.getElementById("esr-type");
    var esr_age = document.getElementById("esr-age");
    if (esr_age.value < 1 && Esr.value <2) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else if (esr_type.value == "ذكر" && esr_age.value < 15 && Esr.value < 13) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else if (esr_type.value == "ذكر" && esr_age.value < 50 && Esr.value < 15) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else if (esr_type.value == "ذكر" && esr_age.value > 50 && Esr.value < 20) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else if (esr_type.value == "انثى" && esr_age.value < 50 && Esr.value < 20) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else if (esr_type.value == "انثى" && esr_age.value > 50 && Esr.value < 30) {
        document.getElementById("esr-result").innerHTML = " معدل الترسيب طبيعى";
    }else{
        document.getElementById("esr-result").innerHTML = " سرعة الترسيب عالية";
    }
}
// //////////////////////////////////////النقرس/////////////////////////////////////////
function acid() {
    var uric_type = document.getElementById("uric-type");
    var uric_range = document.getElementById("uric-range");

    if (uric_type.value == " ذكر" && uric_range.value < 4) {
        document.getElementById("uric-result").innerHTML = "نسبة الاملاح اقل من المعدل الطبيعى";
    }else if(uric_type.value == "ذكر" && uric_range.value <= 8){
        document.getElementById("uric-result").innerHTML = "المعدل طبيعى";
    }else if(uric_type.value == "ذكر" && uric_range.value > 8){
        document.getElementById("uric-result").innerHTML = "نسبة الاملاح اعلى من المعدل الطبيعى يرجى استشارة الطبيب ";
    }else if (uric_type.value == "انثى" && uric_range.value < 2.7) {
        document.getElementById("uric-result").innerHTML = "نسبة الاملاح اقل من المعدل الطبيعى";
    }else if(uric_type.value == "انثى" && uric_range.value <= 7.3){
        document.getElementById("uric-result").innerHTML = "المعدل طبيعى";
    }else if(uric_type.value == "انثى" && uric_range.value > 7.3){
        document.getElementById("uric-result").innerHTML = "نسبة الاملاح اعلى من المعدل الطبيعى يرجى استشارة الطبيب ";
    }else{
        document.getElementById("uric-result").innerHTML = "حاول مرة اخرى";
    }
}
// ///////////////////////////////////وظائف الكلى////////////////////////////////////////////
function cir() {
    var grr = document.getElementById("cir-range");
    var grr_type = document.getElementById("cir-type");

    if (grr_type.value == "ذكر" && grr.value <= 1.4) {
        document.getElementById("cir-result").innerHTML = "النسبة طبيعية لا يوجد مشكلة"
    }else if (grr_type.value == "انثى" && grr.value <= 1.2) {
        document.getElementById("cir-result").innerHTML = "النسبة طبيعية لا يوجد مشكلة"
    }else{
        document.getElementById("cir-result").innerHTML = "النسبة عالية وهذا دليل على وجود مشكلة في الكلى"
    }
}