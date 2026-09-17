import { Question } from "@/lib/types";

// Bài 28: Tạo ảnh động
export const questions: Question[] = [
  {
    "id": "b28-01",
    "q": "Định dạng tệp hình ảnh tiêu chuẩn phổ biến nhất được sử dụng để lưu trữ ảnh động trên web và mạng xã hội là:",
    "options": [
      "GIF (.gif)",
      "JPEG (.jpg)",
      "BMP (.bmp)",
      "MP3 (.mp3)"
    ],
    "answer": 0,
    "explain": "Định dạng GIF (Graphics Interchange Format) là định dạng chuẩn kinh điển hỗ trợ lưu trữ chuỗi khung hình tạo thành ảnh động."
  },
  {
    "id": "b28-02",
    "q": "Hiện tượng mắt người lưu giữ hình ảnh trong khoảng 1/10 đến 1/20 giây sau khi hình ảnh biến mất, là cơ sở khoa học của ảnh động và điện ảnh, được gọi là gì?",
    "options": [
      "Hiện tượng lưu ảnh trên võng mạc (Persistence of vision)",
      "Hiện tượng khúc xạ ánh sáng",
      "Hiện tượng mù màu quang học",
      "Hiện tượng tán sắc ánh sáng"
    ],
    "answer": 0,
    "explain": "Hiện tượng lưu ảnh của mắt cho phép não bộ ghép nối các hình ảnh tĩnh nối tiếp nhau liên tục thành một chuyển động mượt mà."
  },
  {
    "id": "b28-03",
    "q": "Trong phần mềm GIMP, nguyên lý cơ bản để tạo nên các khung hình (Frame) của một bức ảnh động là gì?",
    "options": [
      "Mỗi một lớp ảnh (Layer) trong bảng Layers sẽ đóng vai trò là một khung hình chuyển động",
      "Mỗi một công cụ trong hộp Toolbox là một khung hình",
      "Mỗi điểm ảnh trên màn hình là một khung hình",
      "Chỉ có lớp Background mới tạo được khung hình"
    ],
    "answer": 0,
    "explain": "Trong GIMP, mỗi layer được xem là một khung hình (frame) độc lập của hoạt cảnh."
  },
  {
    "id": "b28-04",
    "q": "Thứ tự trình chiếu tuần tự của các khung hình khi xuất ảnh động GIF trong GIMP diễn ra theo chiều nào?",
    "options": [
      "Trình chiếu từ lớp dưới cùng (bottom layer) tuần tự lên đến lớp trên cùng (top layer)",
      "Trình chiếu từ lớp trên cùng xuống dưới cùng",
      "Trình chiếu ngẫu nhiên không theo quy tắc",
      "Trình chiếu tất cả các lớp cùng một lúc tại giây đầu tiên"
    ],
    "answer": 0,
    "explain": "Quy ước trong GIMP: Khung hình đầu tiên là lớp nằm dưới cùng, sau đó chiếu lần lượt lên các lớp nằm phía trên."
  },
  {
    "id": "b28-05",
    "q": "Để quy định thời gian hiển thị của một khung hình là 200 mili-giây (0.2 giây), quy ước đặt tên cho lớp ảnh đó trong GIMP là gì?",
    "options": [
      "Thêm cụm `(200ms)` vào sau tên của lớp (ví dụ: Frame 1 (200ms))",
      "Đặt tên lớp là `Time 200`",
      "Gõ chữ `200` vào ô kích thước",
      "Không thể quy định thời gian riêng cho từng lớp"
    ],
    "answer": 0,
    "explain": "GIMP nhận diện thông số thời gian trễ qua cú pháp đóng mở ngoặc đơn: `(xxx ms)` ở phần tên lớp."
  },
  {
    "id": "b28-06",
    "q": "1 giây tương ứng với bao nhiêu mili-giây (ms) trong thiết lập tốc độ chuyển động của ảnh GIF?",
    "options": [
      "1000 ms",
      "100 ms",
      "60 ms",
      "10 ms"
    ],
    "answer": 0,
    "explain": "1 giây (s) = 1000 mili-giây (ms). Do đó 100ms tương ứng với 0.1 giây (10 khung hình/giây)."
  },
  {
    "id": "b28-07",
    "q": "Để xem trước hoạt ảnh chuyển động trực tiếp trong GIMP trước khi xuất file, ta sử dụng tính năng nào?",
    "options": [
      "Filters -> Animation -> Playback...",
      "File -> Print Preview",
      "View -> Zoom In",
      "Tools -> GEGL Operation"
    ],
    "answer": 0,
    "explain": "Menu Filters -> Animation -> Playback... mở cửa sổ trình chiếu thử hoạt cảnh với các nút Play, Pause, Step."
  },
  {
    "id": "b28-08",
    "q": "Để xuất hoạt cảnh thành tệp ảnh động GIF trong GIMP, thao tác chuẩn là gì?",
    "options": [
      "File -> Export As... -> Đặt tên có đuôi `.gif` -> Tích chọn 'As animation'",
      "File -> Save As... -> Chọn đuôi `.mp4`",
      "Edit -> Copy Visible",
      "Image -> Canvas Size"
    ],
    "answer": 0,
    "explain": "Vào File -> Export As..., chọn phần mở rộng .gif, sau đó trong hộp thoại xuất bắt buộc phải tích chọn 'As animation'."
  },
  {
    "id": "b28-09",
    "q": "Tùy chọn 'Loop forever' trong hộp thoại xuất ảnh GIF của GIMP có tác dụng gì?",
    "options": [
      "Làm cho chuyển động tự động lặp đi lặp lại vô tận liên tục không bao giờ dừng",
      "Chỉ chạy chuyển động đúng 1 lần rồi dừng đứng hình",
      "Tự động gửi ảnh qua email cho bạn bè",
      "Khóa không cho người xem tải ảnh về máy"
    ],
    "answer": 0,
    "explain": "'Loop forever' thiết lập hoạt ảnh chạy vòng lặp tuần hoàn liên tục."
  },
  {
    "id": "b28-10",
    "q": "Sự khác biệt giữa hai chế độ xử lý khung hình `(combine)` và `(replace)` trong ảnh GIF của GIMP là gì?",
    "options": [
      "`(replace)` sẽ xóa sạch khung hình trước đó trước khi hiển thị khung hình mới; `(combine)` sẽ đè lớp mới chồng lên nội dung của lớp cũ",
      "`(replace)` chỉ dùng cho ảnh màu, `(combine)` chỉ dùng cho ảnh đen trắng",
      "`(combine)` làm tăng gấp đôi kích thước khung hình",
      "Hai chế độ này hoàn toàn giống hệt nhau"
    ],
    "answer": 0,
    "explain": "Replace thay thế hoàn toàn khung hình cũ (rất cần thiết khi đối tượng chuyển động vị trí để tránh bóng ma); Combine đè chồng thêm các chi tiết mới."
  },
  {
    "id": "b28-11",
    "q": "Hạn chế kỹ thuật lớn nhất của định dạng ảnh GIF so với các định dạng như PNG hay JPEG là gì?",
    "options": [
      "Bảng màu bị giới hạn tối đa chỉ có 256 màu (8-bit index), dẫn đến dải màu chuyển tiếp dễ bị phân dải hạt thô",
      "Không thể xem được trên trình duyệt web",
      "Không thể mở được trên điện thoại thông minh",
      "Dung lượng luôn lớn hơn 1 Gigabyte"
    ],
    "answer": 0,
    "explain": "Chuẩn GIF chỉ hỗ trợ tối đa 256 màu trong một bảng palette màu, nên ảnh phong cảnh chân thực sẽ bị giảm chất lượng màu."
  },
  {
    "id": "b28-12",
    "q": "Nếu muốn tạo hiệu ứng đèn giao thông nhấp nháy chuyển từ Đỏ sang Vàng rồi sang Xanh, ta cần tối thiểu bao nhiêu lớp ảnh (khung hình)?",
    "options": [
      "3 lớp ảnh (mỗi lớp thể hiện trạng thái một màu đèn sáng)",
      "1 lớp ảnh duy nhất",
      "300 lớp ảnh",
      "Không thể tạo được trên GIMP"
    ],
    "answer": 0,
    "explain": "Mỗi trạng thái (Đèn đỏ, Đèn vàng, Đèn xanh) tương ứng với 1 lớp ảnh, do đó cần tối thiểu 3 lớp."
  },
  {
    "id": "b28-13",
    "q": "Bộ lọc Filters -> Animation -> Optimize (for GIF) trong GIMP có công dụng tuyệt vời gì?",
    "options": [
      "Tối ưu hóa dung lượng tệp GIF bằng cách chỉ lưu giữ những vùng điểm ảnh có sự thay đổi chuyển động giữa các khung hình liên tiếp",
      "Tự động tăng số lượng màu lên 16 triệu màu",
      "Thêm nhạc nền tự động cho bức ảnh",
      "Dịch chuyển động sang định dạng 3D"
    ],
    "answer": 0,
    "explain": "Optimize (for GIF) loại bỏ các điểm ảnh tĩnh trùng lặp giữa các frame, giúp giảm đáng kể dung lượng tệp GIF."
  },
  {
    "id": "b28-14",
    "q": "Khi xuất ảnh GIF, nếu không ghi thông số `(xxx ms)` ở tên từng lớp, thời gian chuyển khung hình sẽ được tính như thế nào?",
    "options": [
      "Sẽ áp dụng giá trị thời gian trễ mặc định (Default delay between frames) được nhập trong hộp thoại Export Image as GIF (thường là 100ms)",
      "Ảnh sẽ không chuyển động được",
      "Mỗi khung hình dừng đúng 10 phút",
      "Phần mềm sẽ báo lỗi và đóng lại"
    ],
    "answer": 0,
    "explain": "GIMP sẽ áp dụng thông số 'Default delay between frames' cho tất cả các lớp chưa được đặt thời gian riêng."
  },
  {
    "id": "b28-15",
    "q": "Để tạo cảm giác chuyển động mượt mà tự nhiên cho mắt người, tốc độ khung hình (Frame rate) thường được khuyến nghị ở mức nào?",
    "options": [
      "Từ 12 đến 24 khung hình trên giây (fps)",
      "Chỉ 1 khung hình trên 10 giây",
      "1000 khung hình trên giây",
      "Càng ít khung hình càng mượt"
    ],
    "answer": 0,
    "explain": "Từ 12 đến 24 fps (khung hình/giây) đủ để đánh lừa thị giác người xem cảm nhận chuỗi chuyển động liên tục trơn tru."
  },
  {
    "id": "b28-16",
    "q": "Quy trình thiết kế hoạt cảnh nhân vật bước đi trên GIMP thường được thực hiện qua các bước nào?",
    "options": [
      "Thiết kế chuỗi các tư thế chân/tay của nhân vật trên từng lớp riêng -> Sắp xếp thứ tự lớp -> Kiểm tra bằng Playback -> Xuất GIF",
      "Vẽ một bức ảnh duy nhất rồi bấm nút Play",
      "Chụp ảnh màn hình video trên Youtube rồi đổi đuôi .gif",
      "Gõ lệnh SQL SELECT ANIMATION"
    ],
    "answer": 0,
    "explain": "Quy trình chuẩn: Chuẩn bị chuỗi hình tư thế phân cảnh -> sắp xếp lớp theo timeline từ dưới lên -> xem thử -> xuất bản GIF."
  },
  {
    "id": "b28-17",
    "q": "Điều gì sẽ xảy ra nếu một hoạt cảnh chuyển động vị trí nhân vật được đặt chế độ `(combine)` thay vì `(replace)`?",
    "options": [
      "Nhân vật ở các khung hình trước không biến mất mà chồng lấn lên nhau tạo thành vệt bóng ma kéo dài sau lưng",
      "Nhân vật sẽ tự động biến mất hoàn toàn",
      "Bức ảnh tự động đổi màu thành màu tím",
      "Tệp ảnh không thể mở được trên máy tính"
    ],
    "answer": 0,
    "explain": "Combine giữ lại khung hình cũ đè thêm khung hình mới, nếu nhân vật di chuyển sẽ để lại bóng ma của các tư thế cũ."
  },
  {
    "id": "b28-18",
    "q": "Một học sinh muốn tạo dòng chữ 'CHÚC MỪNG NĂM MỚI' đổi 4 màu khác nhau tuần hoàn. Bạn ấy cần thực hiện như thế nào?",
    "options": [
      "Tạo 4 lớp chữ giống hệt nhau về nội dung nhưng mỗi lớp được tô một màu sắc khác nhau (ví dụ Đỏ, Vàng, Xanh dương, Xanh lá)",
      "Tạo 1 lớp chữ và xóa đi gõ lại 4 lần",
      "Chỉ cần đổi màu màn hình máy tính",
      "Tô 4 màu trên cùng một lớp duy nhất"
    ],
    "answer": 0,
    "explain": "Tạo 4 layer tương ứng với 4 trạng thái màu chữ để lần lượt xuất hiện tạo hiệu ứng đổi màu nhấp nháy."
  },
  {
    "id": "b28-19",
    "q": "Trong hộp thoại Playback của GIMP, nút có biểu tượng hình tam giác hướng sang phải dùng để làm gì?",
    "options": [
      "Bắt đầu phát hoạt cảnh chuyển động (Play)",
      "Tua ngược thời gian về đầu",
      "Xóa bỏ hoạt cảnh",
      "Tắt màn hình"
    ],
    "answer": 0,
    "explain": "Biểu tượng tam giác sang phải là nút Play tiêu chuẩn quốc tế để phát hoạt cảnh."
  },
  {
    "id": "b28-20",
    "q": "Để giảm bớt thời gian chờ đợi giữa hai khung hình giúp chuyển động nhanh hơn, người dùng cần điều chỉnh thông số mili-giây như thế nào?",
    "options": [
      "Giảm chỉ số mili-giây xuống (ví dụ từ 500ms xuống còn 100ms)",
      "Tăng chỉ số mili-giây lên 2000ms",
      "Giữ nguyên không thay đổi",
      "Xóa bỏ hoàn toàn lớp ảnh"
    ],
    "answer": 0,
    "explain": "Thời gian trễ (delay) càng nhỏ thì tốc độ lật trang khung hình càng nhanh, chuyển động diễn ra càng gấp rút."
  },
  {
    "id": "b28-21",
    "q": "Định dạng GIF có hỗ trợ điểm ảnh trong suốt (Transparency) hay không?",
    "options": [
      "Có, nhưng chỉ hỗ trợ trong suốt nhị phân 1-bit (hoặc hoàn toàn trong suốt hoặc hoàn toàn mờ đục, không có bán trong suốt mềm mại)",
      "Hoàn toàn không hỗ trợ trong suốt",
      "Hỗ trợ trong suốt 32-bit như PNG",
      "Chỉ hỗ trợ trong suốt màu đỏ"
    ],
    "answer": 0,
    "explain": "GIF chỉ hỗ trợ 1-bit transparency (điểm ảnh hoặc trong suốt 100% hoặc mờ đục 100%), do đó viền ảnh trong suốt dễ bị răng cưa."
  },
  {
    "id": "b28-22",
    "q": "Ứng dụng thực tế phổ biến nhất của ảnh động GIF hiện nay trong đời sống số là gì?",
    "options": [
      "Tạo các biểu tượng cảm xúc (meme/sticker/reaction) sinh động trên mạng xã hội, banner quảng cáo web và minh họa trực quan trong bài giảng",
      "Lưu trữ phim điện ảnh chiếu rạp dài 3 tiếng",
      "Lưu trữ dữ liệu điểm số học sinh của Bộ Giáo dục",
      "Cài đặt hệ điều hành cho máy tính"
    ],
    "answer": 0,
    "explain": "Ảnh GIF cực kỳ phổ biến làm meme, sticker động, banner quảng cáo ngắn và hình ảnh minh họa bài giảng điện tử."
  },
  {
    "id": "b28-23",
    "q": "Khi xuất ảnh GIF trong GIMP, nếu quên không tích vào ô 'As animation', tệp xuất ra sẽ có kết quả như thế nào?",
    "options": [
      "Trở thành một bức ảnh tĩnh duy nhất (chỉ hiển thị lớp ảnh trên cùng hoặc kết hợp phẳng)",
      "Tệp bị lỗi không mở được",
      "Tự động chuyển thành video YouTube",
      "Biến thành một tệp văn bản Word"
    ],
    "answer": 0,
    "explain": "Nếu không chọn 'As animation', GIMP sẽ xuất GIF dưới dạng ảnh tĩnh thông thường, hoàn toàn không chuyển động."
  },
  {
    "id": "b28-24",
    "q": "Để tạo chuyển động một quả bóng nảy từ trên cao rơi xuống đất rồi nảy lên, quy luật sắp xếp vị trí quả bóng qua các layer cần tuân theo điều gì?",
    "options": [
      "Vị trí quả bóng ở các layer thấp dần từ trên xuống đáy, rồi lại dịch chuyển dần lên cao ở các layer kế tiếp",
      "Quả bóng đứng yên tại một tọa độ duy nhất",
      "Mỗi layer đặt quả bóng ở một kích thước khác nhau nhưng không đổi vị trí",
      "Xóa quả bóng khỏi tất cả các layer"
    ],
    "answer": 0,
    "explain": "Mô phỏng quỹ đạo rơi và nảy: layer 1 ở trên cao -> các layer sau quả bóng rơi chạm sàn -> các layer tiếp theo nảy ngược lên."
  }
];
