import { Question } from "@/lib/types";

// Bài 27: Công cụ vẽ và một số ứng dụng
export const questions: Question[] = [
  {
    "id": "b27-01",
    "q": "Công cụ Paintbrush Tool (phím tắt P) trong GIMP dùng để làm gì?",
    "options": [
      "Vẽ các nét cọ mềm mại với độ hòa trộn và chuyển tiếp êm ái trên lớp ảnh",
      "Cắt bỏ các khung hình video thừa",
      "Gõ văn bản nghệ thuật 3D",
      "Đo nhiệt độ của máy tính"
    ],
    "answer": 0,
    "explain": "Paintbrush (phím P) là công cụ cọ vẽ nét mềm cơ bản dùng để tô màu hoặc vẽ các chi tiết nghệ thuật."
  },
  {
    "id": "b27-02",
    "q": "Điểm khác biệt cơ bản giữa công cụ Paintbrush (cọ vẽ) và công cụ Pencil (bút chì - phím tắt N) trong GIMP là gì?",
    "options": [
      "Paintbrush tạo ra các nét cọ có đường viền mềm (anti-aliasing); Pencil tạo ra nét vẽ có cạnh sắc cứng, không khử răng cưa",
      "Pencil chỉ vẽ được màu đen, Paintbrush vẽ được tất cả các màu",
      "Paintbrush không cần dùng chuột",
      "Pencil chỉ dùng để viết chữ tiếng Anh"
    ],
    "answer": 0,
    "explain": "Pencil tạo nét vẽ viền cứng (hard edges), phù hợp vẽ pixel art; Paintbrush tạo nét mềm chuyển tiếp mượt mà."
  },
  {
    "id": "b27-03",
    "q": "Để đổ một màu đồng nhất (màu tiền cảnh Foreground) vào toàn bộ một vùng chọn hoặc một lớp, ta dùng công cụ nào?",
    "options": [
      "Bucket Fill Tool (phím tắt Shift + B)",
      "Eraser Tool (Shift + E)",
      "Crop Tool (Shift + C)",
      "Move Tool (M)"
    ],
    "answer": 0,
    "explain": "Bucket Fill (thùng sơn - phím tắt Shift + B) dùng để đổ đầy màu sắc vào vùng chọn hoặc vùng màu đồng nhất."
  },
  {
    "id": "b27-04",
    "q": "Công cụ Gradient Tool (phím tắt G) trong GIMP có chức năng gì?",
    "options": [
      "Tô màu chuyển sắc mượt mà từ màu này sang màu khác theo một dải biến thiên",
      "Tô một màu duy nhất từ đầu đến cuối",
      "Xóa sạch phông nền của ảnh",
      "Tự động tăng độ phân giải ảnh"
    ],
    "answer": 0,
    "explain": "Gradient Tool (phím G) tạo ra các dải màu chuyển sắc dần (Linear, Radial, Conical...) rất bắt mắt cho background."
  },
  {
    "id": "b27-05",
    "q": "Để lấy một màu sắc có sẵn tại bất kỳ điểm nào trên bức ảnh để làm màu vẽ tiếp theo, ta dùng công cụ nào?",
    "options": [
      "Color Picker Tool (ống hút màu - phím tắt O)",
      "Measure Tool (Shift + U)",
      "Text Tool (T)",
      "Zoom Tool (Z)"
    ],
    "answer": 0,
    "explain": "Color Picker (phím O) hút lấy mã màu chính xác tại điểm ảnh được nhấp chuột để gán làm Foreground hoặc Background color."
  },
  {
    "id": "b27-06",
    "q": "Công cụ Clone Stamp Tool (phím tắt C) trong GIMP hoạt động bằng cách nào?",
    "options": [
      "Sao chép các điểm ảnh từ một vùng mẫu nguồn (Source) để vẽ đè lên vùng đích cần chỉnh sửa",
      "Tự động in con dấu bưu điện lên ảnh",
      "Chỉ sao chép được các đoạn văn bản",
      "Nhân đôi toàn bộ tệp tin trên ổ cứng"
    ],
    "answer": 0,
    "explain": "Clone Stamp (phím C) lấy mẫu từ một vùng gốc (giữ Ctrl + nhấp chuột) rồi tô đè sang vùng khác để che khuyết điểm hoặc nhân bản."
  },
  {
    "id": "b27-07",
    "q": "Thao tác bắt buộc đầu tiên khi sử dụng công cụ Clone Stamp Tool là gì?",
    "options": [
      "Giữ phím Ctrl và nhấp chuột trái vào vùng ảnh mẫu để xác định điểm nguồn (Source point)",
      "Nhấp đúp chuột phải vào màn hình",
      "Nhấn tổ hợp phím Alt + F4",
      "Gõ chữ vào bàn phím"
    ],
    "answer": 0,
    "explain": "Người dùng phải định vị điểm mẫu bằng thao tác Ctrl + Click trước khi có thể quét cọ Clone Stamp."
  },
  {
    "id": "b27-08",
    "q": "Công cụ Healing Tool (phím tắt H) vượt trội hơn công cụ Clone Stamp khi xóa vết xước, mụn hay tàn nhang ở điểm nào?",
    "options": [
      "Healing Tool tự động hòa trộn sắc độ và kết cấu (texture) của vùng vá với vùng da xung quanh để tạo cảm giác hoàn toàn tự nhiên",
      "Healing Tool chạy nhanh hơn 100 lần",
      "Healing Tool không cần giữ phím Ctrl",
      "Healing Tool chỉ áp dụng được cho ảnh chụp phong cảnh"
    ],
    "answer": 0,
    "explain": "Healing Tool tính toán hòa trộn ánh sáng và kết cấu bề mặt xung quanh, giúp xóa khuyết điểm trên da mịn màng tự nhiên."
  },
  {
    "id": "b27-09",
    "q": "Để chèn văn bản (chữ) vào bức ảnh trong GIMP, người dùng chọn công cụ nào?",
    "options": [
      "Text Tool (phím tắt T)",
      "Typewriter Tool",
      "Font Editor",
      "WordArt Tool"
    ],
    "answer": 0,
    "explain": "Text Tool (biểu tượng chữ T, phím tắt T) là công cụ soạn thảo và định dạng văn bản trên ảnh."
  },
  {
    "id": "b27-10",
    "q": "Khi tạo một dòng chữ mới bằng công cụ Text Tool, GIMP sẽ tự động làm gì trong bảng quản lý Layers?",
    "options": [
      "Tự động tạo ra một lớp văn bản mới (Text Layer) riêng biệt có biểu tượng chữ 'T'",
      "Vẽ đè chết vĩnh viễn dòng chữ lên lớp ảnh đang chọn",
      "Xóa bỏ lớp ảnh nền Background",
      "Đóng băng tất cả các lớp khác"
    ],
    "answer": 0,
    "explain": "GIMP tạo một Text Layer riêng giúp văn bản có thể chỉnh sửa lại font chữ, kích cỡ và màu sắc bất kỳ lúc nào."
  },
  {
    "id": "b27-11",
    "q": "Trong bảng tùy chọn của Text Tool, thông số 'Line spacing' quy định điều gì?",
    "options": [
      "Khoảng cách giữa các dòng văn bản liền kề nhau",
      "Khoảng cách giữa các ký tự chữ cái",
      "Độ dày của đường gạch chân",
      "Góc nghiêng của bức ảnh"
    ],
    "answer": 0,
    "explain": "Line spacing điều chỉnh độ giãn dòng giữa các dòng trong một đoạn văn bản."
  },
  {
    "id": "b27-12",
    "q": "Để tạo hiệu ứng bóng đổ (Drop Shadow) nghệ thuật giúp dòng chữ nổi bật rõ nét trên phông nền phức tạp, ta vào menu nào?",
    "options": [
      "Filters -> Light and Shadow -> Drop Shadow...",
      "Colors -> Desaturate",
      "Image -> Autocrop Image",
      "View -> Show Grid"
    ],
    "answer": 0,
    "explain": "Bộ lọc Filters -> Light and Shadow -> Drop Shadow tạo bóng đen đổ mềm mại phía sau đối tượng hoặc chữ."
  },
  {
    "id": "b27-13",
    "q": "Để đổi màu cho một dòng chữ trên Text Layer trong GIMP, thao tác chuẩn là gì?",
    "options": [
      "Dùng Text Tool bôi đen đoạn chữ rồi bấm vào ô Color trong hộp công cụ Text nổi để chọn màu mới",
      "Dùng công cụ Eraser xóa đi rồi gõ lại từ đầu",
      "Đổi màu hình nền máy tính",
      "Chụp ảnh màn hình rồi vẽ lại bằng bút sáp"
    ],
    "answer": 0,
    "explain": "Bôi đen chữ bằng công cụ Text rồi chọn ô Color trên thanh định dạng nổi để đổi màu văn bản."
  },
  {
    "id": "b27-14",
    "q": "Khi thiết kế một poster tuyên truyền cổ động, nguyên tắc nào sau đây về bố cục chữ (Typography) là ĐÚNG?",
    "options": [
      "Tiêu đề chính phải to, rõ ràng, tương phản tốt với màu nền; không nên dùng quá 3 kiểu font chữ khác nhau trên cùng một poster",
      "Càng dùng nhiều font chữ uốn lượn lòe loẹt khác nhau càng đẹp",
      "Chữ màu vàng nhạt nên đặt trên nền màu trắng tinh",
      "Toàn bộ văn bản phải viết chữ thường và nhỏ li ti như hạt gạo"
    ],
    "answer": 0,
    "explain": "Typography chuẩn: Giữ bố cục phân cấp thị giác rõ ràng, tối đa 2-3 font chữ hài hòa và độ tương phản chữ - nền cao dễ đọc."
  },
  {
    "id": "b27-15",
    "q": "Công cụ Eraser Tool (tẩy/xóa - phím tắt Shift + E) có tác dụng gì trên lớp ảnh đã có kênh Alpha?",
    "options": [
      "Tẩy xóa các điểm ảnh để biến vùng đó thành trong suốt (nhìn thấu xuống lớp dưới)",
      "Tô màu đen tuyền vào vùng bị tẩy",
      "Tự động vẽ các bông hoa nhỏ",
      "Làm tăng kích thước của khung vẽ"
    ],
    "answer": 0,
    "explain": "Khi có kênh Alpha, Eraser xóa lớp bề mặt để tạo độ trong suốt nhìn xuyên xuống dưới."
  },
  {
    "id": "b27-16",
    "q": "Trong bảng tùy chọn Tool Options của công cụ Paintbrush, thông số 'Size' quy định điều gì?",
    "options": [
      "Kích thước đường kính của nét cọ vẽ (tính bằng pixel)",
      "Dung lượng bộ nhớ RAM dành cho cọ",
      "Số lượng màu sắc cọ có thể vẽ cùng một lúc",
      "Chiều dài của bức ảnh"
    ],
    "answer": 0,
    "explain": "Size quy định độ to nhỏ của vệt cọ khi quét trên khung vẽ."
  },
  {
    "id": "b27-17",
    "q": "Thông số 'Hardness' của đầu cọ trong GIMP thể hiện điều gì?",
    "options": [
      "Độ cứng / độ sắc nét của mép vệt cọ (100% là mép viền sắc nét, giảm thấp là mép mềm nhòe dần)",
      "Độ bền cơ học của bàn phím máy tính",
      "Độ nặng của tệp đồ họa",
      "Mức độ rung lắc của chuột máy tính"
    ],
    "answer": 0,
    "explain": "Hardness kiểm soát độ mờ nhòe lan tỏa của cạnh nét vẽ; Hardness cao cho nét đanh, thấp cho nét mềm êm."
  },
  {
    "id": "b27-18",
    "q": "Để vẽ một đoạn thẳng tắp nối từ điểm A đến điểm B bằng công cụ Paintbrush trong GIMP, phím tắt hỗ trợ là gì?",
    "options": [
      "Nhấp chuột tại điểm A, sau đó giữ phím Shift và nhấp chuột tại điểm B",
      "Giữ phím Alt và xoay bi lăn chuột",
      "Nhấn phím F1 liên tục",
      "Giữ phím Caps Lock"
    ],
    "answer": 0,
    "explain": "Giữ phím Shift sau khi đã nhấp chuột sẽ tạo một đường ngắm thẳng tắp nối đến điểm nhấp chuột tiếp theo."
  },
  {
    "id": "b27-19",
    "q": "Muốn tạo viền (Stroke) nổi bật bao quanh một dòng chữ nghệ thuật, người thiết kế có thể sử dụng thao tác nào?",
    "options": [
      "Chuột phải vào Text Layer -> Chọn 'Text to Path' -> Vào menu Edit -> Chọn 'Stroke Path...'",
      "Dùng bút chì vẽ tay vòng quanh từng chữ",
      "Dùng kéo cắt mép màn hình",
      "Gõ chữ hai lần đè lên nhau"
    ],
    "answer": 0,
    "explain": "Chuyển chữ thành đường dẫn cong (Text to Path) rồi áp dụng lệnh Stroke Path là cách tạo viền chữ cực kỳ sắc nét."
  },
  {
    "id": "b27-20",
    "q": "Khi thiết kế banner web có kích thước cố định là 1200 x 400 pixel, thao tác khởi tạo tệp mới đúng là:",
    "options": [
      "File -> New... -> Điền Width = 1200, Height = 400, đơn vị chọn pixels",
      "File -> New... -> Điền Width = 1200, Height = 400, đơn vị chọn inches",
      "Vẽ tự do không cần quan tâm kích thước",
      "Mở một bức ảnh bất kỳ rồi vẽ đè lên"
    ],
    "answer": 0,
    "explain": "Tạo tệp chuẩn bằng cách vào File -> New..., nhập đúng chiều rộng và chiều cao với đơn vị là pixel."
  },
  {
    "id": "b27-21",
    "q": "Tại sao khi phục chế một bức ảnh cũ bị vết rách ngang mặt nhân vật, người ta ưu tiên dùng Healing Tool hơn Clone Stamp?",
    "options": [
      "Vì Healing Tool tự động đồng bộ hóa độ mịn của da và ánh sáng cục bộ, không để lại vết chắp vá thô ráp",
      "Vì Clone Stamp không dùng được cho ảnh đen trắng",
      "Vì Healing Tool vẽ được hoa văn kim tuyến",
      "Vì Healing Tool tự động nhận diện danh tính nhân vật"
    ],
    "answer": 0,
    "explain": "Healing Tool có thuật toán dung hòa ánh sáng và bề mặt thông minh nên vết vá hòa tan hoàn hảo vào da."
  },
  {
    "id": "b27-22",
    "q": "Để biến đổi một lớp văn bản thành một lớp ảnh thông thường (Bitmap thông thường) để có thể dùng cọ vẽ tô đè lên, ta chọn lệnh nào?",
    "options": [
      "Discard Text Information (hoặc Rasterize)",
      "Delete Layer",
      "Scale Layer",
      "Save As"
    ],
    "answer": 0,
    "explain": "Hủy bỏ thuộc tính văn bản (Discard Text Information) chuyển lớp chữ thành lớp điểm ảnh thông thường."
  },
  {
    "id": "b27-23",
    "q": "Trong thiết kế poster cổ động phòng cháy chữa cháy, việc chọn tông màu nền chủ đạo là gam màu nóng (đỏ, cam, vàng) nhằm mục đích gì?",
    "options": [
      "Gây sự chú ý thị giác mạnh mẽ, tạo cảm giác báo động, khẩn cấp và nguy hiểm",
      "Tạo cảm giác mát mẻ như đang ở bãi biển",
      "Làm cho người xem cảm thấy buồn ngủ",
      "Tiết kiệm mực in màu xanh"
    ],
    "answer": 0,
    "explain": "Tâm lý học màu sắc: Màu đỏ, cam thuộc gam màu nóng kích thích sự cảnh giác, biểu thị ngọn lửa và tình huống khẩn cấp."
  },
  {
    "id": "b27-24",
    "q": "Sau khi hoàn thiện thiết kế poster, nếu muốn gửi file cho nhà in để in bạt khổ lớn treo ở sân trường, định dạng xuất phù hợp nhất là:",
    "options": [
      "Xuất file ảnh chất lượng cao PNG hoặc TIFF / PDF với độ phân giải từ 150 đến 300 DPI",
      "Xuất ảnh GIF động 256 màu",
      "Xuất file âm thanh MP3",
      "Chụp màn hình điện thoại gửi qua tin nhắn SMS"
    ],
    "answer": 0,
    "explain": "In khổ lớn đòi hỏi định dạng bảo toàn chất lượng (PNG/TIFF/PDF) và mật độ DPI cao để không bị vỡ hạt khi phóng to."
  }
];
