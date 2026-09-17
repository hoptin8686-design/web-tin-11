import { Question } from "@/lib/types";

// Bài 25: Phần mềm chỉnh sửa ảnh
export const questions: Question[] = [
  {
    "id": "b25-01",
    "q": "Phần mềm GIMP (GNU Image Manipulation Program) thuộc loại phần mềm nào sau đây?",
    "options": [
      "Phần mềm mã nguồn mở miễn phí chuyên dùng để xử lý và chỉnh sửa ảnh",
      "Phần mềm quản trị cơ sở dữ liệu quan hệ có trả phí",
      "Hệ điều hành dành riêng cho máy chủ siêu máy tính",
      "Trình duyệt web dùng để lướt Internet tốc độ cao"
    ],
    "answer": 0,
    "explain": "GIMP là phần mềm xử lý hình ảnh mã nguồn mở miễn phí rất mạnh mẽ, thay thế tương đương cho Adobe Photoshop."
  },
  {
    "id": "b25-02",
    "q": "Đơn vị cơ bản nhỏ nhất cấu tạo nên một bức ảnh số dạng Bitmap (Raster) là gì?",
    "options": [
      "Điểm ảnh (Pixel)",
      "Centimet (cm)",
      "Megabyte (MB)",
      "Hertz (Hz)"
    ],
    "answer": 0,
    "explain": "Pixel (viết tắt của Picture Element) là phần tử điểm ảnh nhỏ nhất mang thông tin màu sắc cấu thành ảnh Bitmap."
  },
  {
    "id": "b25-03",
    "q": "Định dạng tệp gốc mặc định của GIMP dùng để lưu giữ nguyên vẹn toàn bộ các lớp (layers), vùng chọn và lịch sử chỉnh sửa là gì?",
    "options": [
      ".xcf",
      ".jpg",
      ".png",
      ".mp4"
    ],
    "answer": 0,
    "explain": "Định dạng .xcf (eXperimental Computing Facility) là định dạng tệp dự án gốc độc quyền của phần mềm GIMP."
  },
  {
    "id": "b25-04",
    "q": "Thao tác nào sau đây trong GIMP dùng để lưu ảnh thành phẩm ở định dạng phổ biến như JPEG hoặc PNG?",
    "options": [
      "File -> Export As... (hoặc Shift + Ctrl + E)",
      "File -> Save (Ctrl + S)",
      "File -> Print",
      "Edit -> Cut"
    ],
    "answer": 0,
    "explain": "Trong GIMP, lệnh Save chỉ lưu tệp dự án .xcf, muốn xuất ra JPG, PNG, GIF bắt buộc phải chọn File -> Export As..."
  },
  {
    "id": "b25-05",
    "q": "Khái niệm 'Lớp ảnh' (Layer) trong phần mềm chỉnh sửa ảnh có thể hình dung trực quan giống như điều gì?",
    "options": [
      "Các tấm kính trong suốt xếp chồng lên nhau, mỗi tấm chứa một đối tượng đồ họa độc lập",
      "Các ngăn kéo đựng tiền trong ngân hàng",
      "Các dòng mã nguồn lệnh SQL trên máy chủ",
      "Các thư mục lưu trữ bài hát trên máy tính"
    ],
    "answer": 0,
    "explain": "Lớp ảnh giống như các tấm nhựa/kính trong suốt xếp chồng lên nhau; ta có thể sửa đổi từng lớp mà không ảnh hưởng lớp khác."
  },
  {
    "id": "b25-06",
    "q": "Biểu tượng hình 'Con mắt' nằm bên cạnh mỗi lớp trong bảng điều khiển Layers có tác dụng gì?",
    "options": [
      "Bật hoặc tắt chế độ hiển thị (Ẩn/Hiện) của lớp ảnh đó",
      "Xóa vĩnh viễn lớp ảnh ra khỏi tệp",
      "Khóa không cho di chuyển lớp ảnh",
      "Tự động tăng độ sáng cho lớp ảnh"
    ],
    "answer": 0,
    "explain": "Nhấp vào biểu tượng con mắt sẽ ẩn hoặc hiện lớp ảnh tương ứng trên khung vẽ (Canvas)."
  },
  {
    "id": "b25-07",
    "q": "Để cắt xén bỏ bớt các phần thừa xung quanh viền của bức ảnh trong GIMP, người dùng sử dụng công cụ nào?",
    "options": [
      "Crop Tool (phím tắt Shift + C)",
      "Bucket Fill Tool (Shift + B)",
      "Text Tool (T)",
      "Eraser Tool (Shift + E)"
    ],
    "answer": 0,
    "explain": "Công cụ Crop Tool (Shift + C) cho phép khoanh vùng và cắt xén khung hình bức ảnh theo kích thước mong muốn."
  },
  {
    "id": "b25-08",
    "q": "Công cụ Scale Tool (phím tắt Shift + S) trong GIMP có chức năng gì?",
    "options": [
      "Thay đổi kích thước (thu nhỏ hoặc phóng to) của lớp ảnh hoặc đối tượng",
      "Xoay đối tượng quanh một trục góc",
      "Đổi màu toàn bộ bức ảnh sang màu đen",
      "Tạo chữ nghệ thuật uốn lượn"
    ],
    "answer": 0,
    "explain": "Scale Tool dùng để phóng to, thu nhỏ kích thước của toàn bộ bức ảnh hoặc từng lớp riêng biệt."
  },
  {
    "id": "b25-09",
    "q": "Độ phân giải hình ảnh thường được đo bằng đơn vị nào sau đây?",
    "options": [
      "DPI (Dots Per Inch) hoặc PPI (Pixels Per Inch)",
      "GHz (Gigahertz)",
      "RPM (Vòng trên phút)",
      "Mbps (Megabit trên giây)"
    ],
    "answer": 0,
    "explain": "DPI/PPI đo mật độ số điểm ảnh trên một inch chiều dài, chỉ số càng cao thì ảnh in hoặc hiển thị càng sắc nét."
  },
  {
    "id": "b25-10",
    "q": "Chế độ màu chuẩn được sử dụng để hiển thị trên màn hình kỹ thuật số (máy tính, điện thoại, tivi) là:",
    "options": [
      "RGB (Red - Green - Blue)",
      "CMYK (Cyan - Magenta - Yellow - Black)",
      "Grayscale (Đơn sắc thang xám)",
      "Indexed (Bảng màu chỉ mục 256 màu)"
    ],
    "answer": 0,
    "explain": "RGB là hệ màu cộng ánh sáng chuẩn cho mọi thiết bị phát sáng hiển thị kỹ thuật số."
  },
  {
    "id": "b25-11",
    "q": "Kênh Alpha (Alpha Channel) của một lớp ảnh trong GIMP có ý nghĩa gì?",
    "options": [
      "Quản lý thông tin về độ trong suốt (Transparency) của các điểm ảnh trên lớp đó",
      "Tự động dịch văn bản tiếng Anh sang tiếng Việt",
      "Lưu giữ mật khẩu bảo vệ ảnh",
      "Tăng tốc độ kết nối Internet khi tải ảnh"
    ],
    "answer": 0,
    "explain": "Alpha Channel quy định độ trong suốt của pixel, cho phép nhìn xuyên qua lớp ảnh tới các lớp nằm phía dưới."
  },
  {
    "id": "b25-12",
    "q": "Khi xóa một vùng trên một lớp chưa được thêm kênh Alpha (Add Alpha Channel), vùng bị xóa sẽ có trạng thái gì?",
    "options": [
      "Bị tô bằng màu nền (Background color) hiện tại thay vì trở nên trong suốt",
      "Biến thành một lỗ thủng nhìn thấu các lớp bên dưới",
      "Tự động đổi thành màu xanh lá cây",
      "Khiến phần mềm GIMP bị treo"
    ],
    "answer": 0,
    "explain": "Nếu không có kênh Alpha, khi dùng tẩy (Eraser) hoặc phím Delete, vùng bị xóa sẽ bị lấp đầy bởi màu nền Background."
  },
  {
    "id": "b25-13",
    "q": "Tổ hợp phím tắt nào được dùng để hoàn tác (Undo) thao tác vừa thực hiện sai trong GIMP?",
    "options": [
      "Ctrl + Z",
      "Ctrl + Y",
      "Ctrl + S",
      "Alt + F4"
    ],
    "answer": 0,
    "explain": "Ctrl + Z là tổ hợp phím hoàn tác thao tác chuẩn trong GIMP và hầu hết mọi ứng dụng đồ họa."
  },
  {
    "id": "b25-14",
    "q": "Để lật đối tượng theo chiều ngang (Mirror) hoặc chiều dọc trong GIMP, ta dùng công cụ nào?",
    "options": [
      "Flip Tool (phím tắt Shift + F)",
      "Rotate Tool (Shift + R)",
      "Shear Tool (Shift + H)",
      "Perspective Tool (Shift + P)"
    ],
    "answer": 0,
    "explain": "Flip Tool cho phép lật đối xứng hình ảnh theo chiều ngang (Horizontal) hoặc chiều dọc (Vertical)."
  },
  {
    "id": "b25-15",
    "q": "Thông số Opacity trong bảng điều khiển Layers của GIMP quy định điều gì của lớp ảnh?",
    "options": [
      "Độ mờ đục / độ trong suốt của lớp ảnh (từ 0% trong suốt hoàn toàn đến 100% mờ đục hoàn toàn)",
      "Kích thước chiều rộng tính bằng centimet",
      "Tốc độ tải ảnh lên mạng",
      "Góc xoay nghiêng của khung hình"
    ],
    "answer": 0,
    "explain": "Opacity biểu thị mức độ hiển thị rõ nét hay mờ đục của lớp ảnh, 0% là tàng hình trong suốt, 100% là mờ đục tối đa."
  },
  {
    "id": "b25-16",
    "q": "Để tạo một bức ảnh mới hoàn toàn trong GIMP với kích thước tùy chọn, ta vào menu nào?",
    "options": [
      "File -> New... (Ctrl + N)",
      "File -> Open... (Ctrl + O)",
      "Image -> Canvas Size",
      "View -> Zoom In"
    ],
    "answer": 0,
    "explain": "Menu File -> New... mở hộp thoại tạo ảnh mới với các thông số chiều rộng, chiều cao và độ phân giải."
  },
  {
    "id": "b25-17",
    "q": "Định dạng ảnh nào sau đây hỗ trợ lưu nền trong suốt (Transparency) với chất lượng không nén mất mát?",
    "options": [
      "PNG (.png)",
      "JPEG (.jpg)",
      "BMP (.bmp)",
      "MP3 (.mp3)"
    ],
    "answer": 0,
    "explain": "PNG là định dạng chuẩn hỗ trợ kênh trong suốt 24-bit/32-bit rất phổ biến trong thiết kế đồ họa web."
  },
  {
    "id": "b25-18",
    "q": "Khi xuất ảnh ra định dạng JPEG trong GIMP, thanh trượt 'Quality' (Chất lượng) có mối quan hệ như thế nào với dung lượng tệp?",
    "options": [
      "Chất lượng càng cao thì bức ảnh càng sắc nét và dung lượng tệp càng lớn",
      "Chất lượng càng cao thì dung lượng tệp càng nhỏ",
      "Chất lượng không ảnh hưởng gì tới dung lượng",
      "Chất lượng chỉ quyết định số lượng màu sắc chứ không đổi dung lượng"
    ],
    "answer": 0,
    "explain": "Tăng Quality trong JPEG giữ lại nhiều chi tiết hơn dẫn đến kích thước tệp (dung lượng KB/MB) tăng lên tương ứng."
  },
  {
    "id": "b25-19",
    "q": "Bảng Tool Options trong giao diện GIMP có nhiệm vụ gì?",
    "options": [
      "Hiển thị và cho phép tùy chỉnh các tham số chi tiết của công cụ đang được chọn (như kích thước cọ, độ mờ, góc xoay)",
      "Chứa danh sách bài hát đang phát",
      "Liệt kê các thiết bị kết nối Bluetooth",
      "Quản lý lịch hẹn của người dùng"
    ],
    "answer": 0,
    "explain": "Tool Options (Tùy chọn công cụ) thay đổi linh hoạt theo công cụ đang kích hoạt giúp người dùng tinh chỉnh thông số làm việc."
  },
  {
    "id": "b25-20",
    "q": "Để ghép hai lớp ảnh nằm liền kề nhau thành một lớp duy nhất trong GIMP, người dùng nhấp chuột phải vào lớp trên và chọn:",
    "options": [
      "Merge Down (Ghép xuống dưới)",
      "Delete Layer",
      "Duplicate Layer",
      "New Layer"
    ],
    "answer": 0,
    "explain": "Merge Down gộp lớp đang chọn với lớp ngay bên dưới thành một lớp ảnh tổng hợp."
  },
  {
    "id": "b25-21",
    "q": "Để nhân đôi một lớp ảnh đang có (tạo bản sao giống hệt), lệnh nào trong bảng Layers được sử dụng?",
    "options": [
      "Duplicate Layer (hoặc biểu tượng hai tấm kính ở chân bảng Layers)",
      "Crop Layer",
      "Invert Layer",
      "Clear Layer"
    ],
    "answer": 0,
    "explain": "Duplicate Layer tạo ra một bản sao y hệt của lớp hiện tại đặt ngay phía trên."
  },
  {
    "id": "b25-22",
    "q": "Muốn thay đổi thứ tự xếp chồng của một lớp ảnh lên trên hoặc xuống dưới các lớp khác, thao tác trực quan nhất là:",
    "options": [
      "Kéo thả lớp ảnh đó lên hoặc xuống vị trí mong muốn trong bảng danh sách Layers",
      "Nhấp đúp chuột vào màn hình",
      "Tắt màn hình rồi mở lại",
      "Gõ lệnh SQL trong menu Edit"
    ],
    "answer": 0,
    "explain": "Người dùng chỉ cần giữ chuột trái vào lớp ảnh và kéo thả lên hoặc xuống trong bảng Layers để hoán đổi thứ tự."
  },
  {
    "id": "b25-23",
    "q": "Công cụ Move Tool (phím tắt M) trong GIMP dùng để làm gì?",
    "options": [
      "Di chuyển vị trí của các lớp ảnh, vùng chọn hoặc đường gióng (guide) trên khung vẽ",
      "Đổi màu nền của ảnh",
      "Cắt video clip thành 2 phần",
      "Xóa hết tất cả văn bản"
    ],
    "answer": 0,
    "explain": "Move Tool (phím M) dùng để tóm và kéo dịch chuyển đối tượng hoặc toàn bộ lớp ảnh trên khung hình."
  },
  {
    "id": "b25-24",
    "q": "Tại sao người thiết kế đồ họa chuyên nghiệp luôn lưu tệp gốc .xcf song song với việc xuất ảnh ra file JPEG/PNG?",
    "options": [
      "Để sau này có thể mở lại sửa đổi từng chi tiết, từng lớp ảnh riêng rẽ mà không làm giảm chất lượng ảnh",
      "Vì hệ điều hành bắt buộc phải có 2 file mới mở được",
      "Vì file JPEG sẽ tự hủy sau 7 ngày",
      "Để tăng gấp đôi tốc độ mạng Internet"
    ],
    "answer": 0,
    "explain": "Tệp .xcf bảo tồn cấu trúc phân tầng (layers), văn bản gốc và hiệu ứng, cho phép chỉnh sửa lại bất cứ lúc nào."
  }
];
