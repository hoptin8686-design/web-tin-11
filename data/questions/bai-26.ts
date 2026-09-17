import { Question } from "@/lib/types";

// Bài 26: Công cụ chọn và công cụ tinh chỉnh màu sắc
export const questions: Question[] = [
  {
    "id": "b26-01",
    "q": "Trong GIMP, công cụ nào sau đây dùng để tạo vùng chọn có dạng hình chữ nhật hoặc hình vuông?",
    "options": [
      "Rectangle Select Tool (phím tắt R)",
      "Ellipse Select Tool (E)",
      "Free Select Tool (F)",
      "Fuzzy Select Tool (U)"
    ],
    "answer": 0,
    "explain": "Rectangle Select Tool (phím R) dùng để khoanh vùng chọn khung chữ nhật hoặc hình vuông trên ảnh."
  },
  {
    "id": "b26-02",
    "q": "Công cụ Fuzzy Select Tool (còn gọi là Magic Wand / Cây đũa thần - phím tắt U) hoạt động dựa trên nguyên lý nào?",
    "options": [
      "Tự động chọn vùng các điểm ảnh liền kề có màu sắc tương đồng nhau",
      "Nhận diện khuôn mặt người tự động",
      "Chọn ngẫu nhiên 50% số điểm ảnh trên màn hình",
      "Chỉ chọn được các điểm ảnh màu đen"
    ],
    "answer": 0,
    "explain": "Fuzzy Select (Magic Wand) chọn các pixel liền kề nhau có độ tương đồng màu nằm trong ngưỡng Threshold cho trước."
  },
  {
    "id": "b26-03",
    "q": "Sự khác biệt giữa công cụ Fuzzy Select (U) và Select by Color (Shift + O) trong GIMP là gì?",
    "options": [
      "Fuzzy Select chỉ chọn các pixel cùng màu liền kề nhau; còn Select by Color chọn mọi pixel cùng màu trên toàn bộ bức ảnh",
      "Fuzzy Select chỉ dùng cho ảnh đen trắng, Select by Color chỉ dùng cho ảnh màu",
      "Hai công cụ này giống hệt nhau không có điểm khác biệt",
      "Select by Color chỉ hoạt động khi có kết nối Internet"
    ],
    "answer": 0,
    "explain": "Fuzzy Select giới hạn trong vùng màu nối liền, trong khi Select by Color gom tất cả pixel màu đó ở khắp mọi nơi trên ảnh."
  },
  {
    "id": "b26-04",
    "q": "Công cụ Free Select Tool (Lasso - phím tắt F) cho phép người dùng tạo vùng chọn bằng cách nào?",
    "options": [
      "Vẽ tự do bằng tay hoặc nhấp chuột định vị từng đoạn thẳng bao quanh đối tượng",
      "Tự động vẽ một hình tròn hoàn hảo",
      "Tự động tìm kiếm mã vạch sản phẩm",
      "Chỉ chọn theo đường kẻ thẳng từ trên xuống dưới"
    ],
    "answer": 0,
    "explain": "Free Select (Lasso) cho phép vẽ tự do bằng chuột bao quanh các đường viền phức tạp của đối tượng."
  },
  {
    "id": "b26-05",
    "q": "Thao tác Đảo ngược vùng chọn (Invert Selection - Ctrl + I) có tác dụng gì?",
    "options": [
      "Bỏ chọn vùng đang được chọn và chuyển sang chọn toàn bộ phần còn lại của bức ảnh",
      "Lật ngược bức ảnh từ trên xuống dưới",
      "Xóa sạch toàn bộ nội dung của bức ảnh",
      "Đổi màu toàn bộ vùng chọn thành màu đen"
    ],
    "answer": 0,
    "explain": "Invert (Ctrl + I) biến vùng đang chọn thành không chọn và ngược lại, rất hữu ích khi chọn nền một màu rồi đảo ngược để lấy đối tượng."
  },
  {
    "id": "b26-06",
    "q": "Để hủy bỏ hoàn toàn vùng chọn hiện tại trong GIMP, tổ hợp phím tắt nhanh nhất là:",
    "options": [
      "Shift + Ctrl + A (Select -> None)",
      "Ctrl + A",
      "Ctrl + C",
      "Ctrl + X"
    ],
    "answer": 0,
    "explain": "Select -> None (phím tắt Shift + Ctrl + A) dùng để hủy bỏ hoàn toàn đường viền vùng chọn đang có."
  },
  {
    "id": "b26-07",
    "q": "Tính năng Feather Selection (Làm mềm/mờ biên vùng chọn) trong GIMP nhằm mục đích gì?",
    "options": [
      "Làm cho mép viền của đối tượng sau khi cắt không bị răng cưa sắc nhọn, hòa trộn tự nhiên và êm dịu vào phông nền mới",
      "Tự động tăng kích thước vùng chọn lên gấp 10 lần",
      "Làm đổi màu lông chim thành màu trắng",
      "Làm giảm độ phân giải của máy ảnh"
    ],
    "answer": 0,
    "explain": "Feather làm nhòe chuyển tiếp mềm mại mép đường viền vùng chọn, tránh hiện tượng vết cắt thô ráp bị lộ."
  },
  {
    "id": "b26-08",
    "q": "Để tách lấy một bông hoa màu đỏ nằm trên nền cỏ xanh mướt, quy trình tách nền hiệu quả và nhanh nhất là:",
    "options": [
      "Dùng Fuzzy Select hoặc Select by Color chọn nền xanh -> Đảo ngược vùng chọn (Invert) -> Sao chép đối tượng sang lớp mới",
      "Dùng công cụ Text Tool gõ chữ 'Bông hoa'",
      "Dùng công cụ Crop Tool cắt làm 4 mảnh",
      "Tắt màn hình máy tính rồi bật lại"
    ],
    "answer": 0,
    "explain": "Chọn nền màu đồng nhất rồi đảo ngược vùng chọn là kỹ thuật tách đối tượng kinh điển trong thiết kế đồ họa."
  },
  {
    "id": "b26-09",
    "q": "Công cụ tinh chỉnh màu sắc nào cho phép chỉnh nhanh Độ sáng (Brightness) và Độ tương phản (Contrast) của bức ảnh?",
    "options": [
      "Colors -> Brightness-Contrast...",
      "Colors -> Invert",
      "Image -> Canvas Size",
      "Tools -> Zoom"
    ],
    "answer": 0,
    "explain": "Colors -> Brightness-Contrast là công cụ trực quan nhất để tăng giảm độ sáng tối và tương phản của bức ảnh."
  },
  {
    "id": "b26-10",
    "q": "Độ tương phản (Contrast) của bức ảnh thể hiện điều gì?",
    "options": [
      "Sự khác biệt và tách bạch rõ rệt giữa vùng sáng nhất và vùng tối nhất trong bức ảnh",
      "Tổng số lượng điểm ảnh có trong tệp",
      "Tốc độ màn trập của máy ảnh",
      "Độ phân giải DPI của máy in"
    ],
    "answer": 0,
    "explain": "Độ tương phản biểu thị độ chênh lệch giữa các vùng sáng và vùng tối; tương phản cao làm ảnh sắc nét, góc cạnh, tương phản thấp làm ảnh mờ đục xám xịt."
  },
  {
    "id": "b26-11",
    "q": "Hộp thoại Levels (Colors -> Levels...) trong GIMP cung cấp tính năng gì mạnh mẽ hơn Brightness-Contrast?",
    "options": [
      "Cho phép cân chỉnh độc lập 3 dải sắc thái: Vùng tối (Shadows), Vùng trung gian (Midtones) và Vùng sáng (Highlights) qua biểu đồ Histogram",
      "Chỉ cho phép tăng giảm âm lượng",
      "Tự động xóa nếp nhăn trên khuôn mặt",
      "Thay đổi độ dày của đường viền khung tranh"
    ],
    "answer": 0,
    "explain": "Levels hiển thị biểu đồ phân bố điểm ảnh (Histogram) và cho phép người dùng kéo 3 con trượt Shadows, Midtones, Highlights."
  },
  {
    "id": "b26-12",
    "q": "Công cụ Curves (Colors -> Curves...) trong GIMP hoạt động bằng cách nào?",
    "options": [
      "Sử dụng một đường cong đồ thị có thể uốn lượn để kiểm soát chính xác độ sáng và độ tương phản của từng kênh màu ở mọi dải sắc thái",
      "Vẽ các đường tròn trang trí lên góc bức ảnh",
      "Uốn cong dòng văn bản thành hình sóng biển",
      "Tự động làm méo hình người chụp"
    ],
    "answer": 0,
    "explain": "Curves là công cụ chỉnh sáng và màu sắc chuyên nghiệp nhất thông qua việc uốn cong đồ thị truyền dẫn ánh sáng."
  },
  {
    "id": "b26-13",
    "q": "Để tăng độ tươi tắn, rực rỡ và sống động cho các màu sắc trong bức ảnh chụp phong cảnh bị xỉn màu, ta nên điều chỉnh thông số nào?",
    "options": [
      "Độ bão hòa màu (Saturation) trong menu Colors -> Hue-Saturation...",
      "Độ phân giải màn hình",
      "Tốc độ quạt tản nhiệt của máy tính",
      "Độ trong suốt Opacity của lớp"
    ],
    "answer": 0,
    "explain": "Saturation (độ bão hòa màu) quyết định độ tinh khiết và rực rỡ của màu sắc; tăng Saturation làm màu sống động hơn."
  },
  {
    "id": "b26-14",
    "q": "Thông số 'Hue' trong công cụ Colors -> Hue-Saturation... đại diện cho đặc trưng gì của màu sắc?",
    "options": [
      "Tông màu / sắc thái màu cụ thể (như đỏ, cam, vàng, lục, lam, tím)",
      "Độ nặng của tệp tính bằng Kilobyte",
      "Độ trong suốt của lớp ảnh",
      "Số lượng màu đen có trong bức ảnh"
    ],
    "answer": 0,
    "explain": "Hue là thuộc tính xác định bước sóng quang phổ hay tên gọi của màu sắc trên vòng tròn thuần sắc."
  },
  {
    "id": "b26-15",
    "q": "Để chuyển nhanh một bức ảnh màu thành một bức ảnh đen trắng nghệ thuật trong GIMP, lệnh chuẩn là gì?",
    "options": [
      "Colors -> Desaturate -> Desaturate...",
      "File -> Close",
      "Edit -> Cut",
      "Select -> All"
    ],
    "answer": 0,
    "explain": "Colors -> Desaturate khử sạch toàn bộ sắc tố màu, chuyển đổi điểm ảnh sang các mức độ thang xám (Grayscale)."
  },
  {
    "id": "b26-16",
    "q": "Khi sử dụng công cụ Colors -> Color Balance..., người dùng có thể làm gì?",
    "options": [
      "Tăng hoặc giảm các cặp màu đối lập (Cyan-Red, Magenta-Green, Yellow-Blue) để loại bỏ ám màu cho bức ảnh",
      "Cân bằng dung lượng giữa hai ổ đĩa",
      "Tự động dịch văn bản trên poster",
      "Cân bằng thời lượng của các bài hát"
    ],
    "answer": 0,
    "explain": "Color Balance giúp cân chỉnh tỷ lệ giữa các cặp màu bù nhằm loại trừ các hiện tượng ảnh bị ám vàng, ám xanh hoặc ám đỏ."
  },
  {
    "id": "b26-17",
    "q": "Khi một vùng trên ảnh đang được khoanh bằng đường viền kiến bò (vùng chọn), thao tác chỉnh màu sắc trong menu Colors sẽ tác động lên đâu?",
    "options": [
      "Chỉ duy nhất các điểm ảnh nằm bên trong vùng chọn đó",
      "Toàn bộ mọi bức ảnh đang lưu trên ổ đĩa cứng",
      "Toàn bộ màn hình máy tính",
      "Chỉ tác động lên các điểm ảnh nằm ngoài vùng chọn"
    ],
    "answer": 0,
    "explain": "Mọi bộ lọc và công cụ chỉnh sửa chỉ có hiệu lực bên trong phạm vi vùng chọn đang kích hoạt."
  },
  {
    "id": "b26-18",
    "q": "Để chọn thêm một vùng mới mà không làm mất vùng chọn đang có sẵn, người dùng giữ phím nào trong khi kéo chọn?",
    "options": [
      "Giữ phím Shift (chế độ Add to selection)",
      "Giữ phím Ctrl (Subtract from selection)",
      "Giữ phím Alt",
      "Giữ phím Tab"
    ],
    "answer": 0,
    "explain": "Giữ phím Shift chuyển công cụ chọn sang chế độ 'Add' (cộng dồn vùng chọn mới vào vùng chọn cũ)."
  },
  {
    "id": "b26-19",
    "q": "Để loại bớt (bớt đi) một phần diện tích khỏi vùng chọn hiện tại, người dùng giữ phím nào?",
    "options": [
      "Giữ phím Ctrl (chế độ Subtract)",
      "Giữ phím Shift",
      "Giữ phím Space",
      "Giữ phím Caps Lock"
    ],
    "answer": 0,
    "explain": "Giữ phím Ctrl chuyển công cụ chọn sang chế độ 'Subtract' (trừ bớt phần giao thoa ra khỏi vùng chọn)."
  },
  {
    "id": "b26-20",
    "q": "Công cụ Scissors Select Tool (Kéo thông minh) trong GIMP có ưu điểm nổi bật gì?",
    "options": [
      "Tự động tìm kiếm và bắt dính đường bao khớp chính xác vào các cạnh có độ tương phản cao của đối tượng khi người dùng nhấp các điểm chốt",
      "Cắt đứt tấm màn hình máy tính làm đôi",
      "Tự động in ảnh ra máy in phun",
      "Xóa sạch phông nền trong 0.001 giây"
    ],
    "answer": 0,
    "explain": "Scissors Select Tool (kéo thông minh) tự động dò tìm biên sắc nét giữa đối tượng và nền để bám dính viền."
  },
  {
    "id": "b26-21",
    "q": "Trong hộp thoại Curves, muốn làm cho toàn bộ bức ảnh trở nên sáng hơn, ta thực hiện thao tác nào?",
    "options": [
      "Nhấp vào điểm giữa của đường chéo và kéo uốn cong lên phía trên",
      "Kéo điểm giữa cong chúc xuống phía dưới",
      "Xóa bỏ đường cong",
      "Xoay đường cong một góc 90 độ"
    ],
    "answer": 0,
    "explain": "Kéo điểm đồ thị cong lên trên làm tăng độ sáng tổng thể của các điểm ảnh; kéo cong xuống dưới làm tối ảnh."
  },
  {
    "id": "b26-22",
    "q": "Lỗi 'ảnh bị cháy sáng' (Overexposed) trong nhiếp ảnh thường được biểu hiện như thế nào trên biểu đồ Levels?",
    "options": [
      "Phần lớn các cột điểm ảnh dồn cục bộ về sát mép bên phải (vùng Highlights - giá trị 255)",
      "Các cột điểm ảnh dồn toàn bộ về mép bên trái (vùng Shadows)",
      "Biểu đồ phân bố đều hình quả chuông ở chính giữa",
      "Biểu đồ hoàn toàn phẳng lì không có cột nào"
    ],
    "answer": 0,
    "explain": "Mép phải của biểu đồ Levels đại diện cho vùng thuần trắng; ảnh cháy sáng có các điểm ảnh tập trung ồ ạt ở mép này."
  },
  {
    "id": "b26-23",
    "q": "Lệnh Select -> Grow... trong menu GIMP dùng để làm gì?",
    "options": [
      "Mở rộng ranh giới của vùng chọn hiện tại ra phía ngoài thêm một số lượng pixel nhất định",
      "Thu hẹp vùng chọn vào bên trong",
      "Làm méo mó vùng chọn",
      "Lưu vùng chọn ra màn hình desktop"
    ],
    "answer": 0,
    "explain": "Select -> Grow nới rộng đường viền vùng chọn ra các phía xung quanh theo giá trị pixel chỉ định."
  },
  {
    "id": "b26-24",
    "q": "Sau khi đã khoanh chọn và tinh chỉnh màu sắc cho khuôn mặt ưng ý, thao tác an toàn tiếp theo là:",
    "options": [
      "Nhấn Shift + Ctrl + A để hủy vùng chọn và tiếp tục các công việc khác",
      "Tắt nguồn máy tính đột ngột",
      "Nhấn phím Delete để xóa khuôn mặt",
      "Đổi tên file thành định dạng .mp3"
    ],
    "answer": 0,
    "explain": "Hủy vùng chọn (Shift + Ctrl + A) giúp đưa vùng làm việc trở lại trạng thái tự do để thực hiện các thao tác tiếp theo."
  }
];
