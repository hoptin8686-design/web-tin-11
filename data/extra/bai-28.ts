import { LessonExtra } from "@/lib/types";

// Bài 28: Tạo ảnh động (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b28-tf1",
      "context": "Bạn Tuấn thực hành tạo một ảnh động GIF minh họa quá trình nảy mầm của một hạt đậu bằng phần mềm GIMP để nộp bài tập Sinh học.",
      "statements": [
        {
          "text": "a) Tuấn vẽ từng giai đoạn phát triển (hạt đậu nứt nanh, nhú rễ, đâm chồi, xòe 2 lá mầm) trên 4 lớp ảnh (layers) khác nhau trong GIMP.",
          "answer": true,
          "explain": "Đúng. Mỗi giai đoạn phát triển tương ứng với 1 khung hình trên 1 layer độc lập."
        },
        {
          "text": "b) Tuấn cần sắp xếp lớp hạt đậu mới gieo ở vị trí dưới cùng (bottom layer) và lớp cây có 2 lá mầm ở vị trí trên cùng (top layer).",
          "answer": true,
          "explain": "Đúng. GIMP trình chiếu theo thứ tự từ lớp dưới cùng lên lớp trên cùng."
        },
        {
          "text": "c) Tuấn chỉ có thể xuất ảnh động nếu máy tính có kết nối mạng Internet tốc độ cao.",
          "answer": false,
          "explain": "Sai. GIMP xử lý và xuất ảnh cục bộ hoàn toàn trên máy tính ngoại tuyến (offline)."
        },
        {
          "text": "d) Tính năng Filters -> Animation -> Playback... cho phép Tuấn xem trước thử nghiệm sự nảy mầm của cây trước khi xuất thành file.",
          "answer": true,
          "explain": "Đúng. Hộp thoại Playback dùng để xem trước hoạt cảnh rất trực quan."
        }
      ]
    },
    {
      "id": "b28-tf2",
      "context": "Tuấn muốn giai đoạn cây nhú 2 lá mầm dừng lại lâu hơn một chút (1.5 giây) để người xem quan sát rõ, các giai đoạn trước chỉ lướt qua nhanh (0.5 giây).",
      "statements": [
        {
          "text": "a) Tuấn có thể đổi tên lớp cuối cùng thành `LaMam (1500ms)` và các lớp trước thành `(500ms)` để tùy chỉnh thời gian hiển thị riêng biệt.",
          "answer": true,
          "explain": "Đúng. 1.5s = 1500ms, 0.5s = 500ms theo đúng cú pháp nhận diện của GIMP."
        },
        {
          "text": "b) Nếu Tuấn đổi tên lớp thành `LaMam (1.5s)` thì phần mềm GIMP chắc chắn sẽ hiểu và nhận diện đúng chuẩn.",
          "answer": false,
          "explain": "Sai. Quy ước bắt buộc của GIMP là đơn vị mili-giây viết tắt là `ms`, ví dụ `(1500ms)` chứ không dùng `s`."
        },
        {
          "text": "c) Khi xuất file GIF, việc tích chọn ô 'Loop forever' giúp vòng đời nảy mầm của cây tự động lặp lại liên tục không ngừng.",
          "answer": true,
          "explain": "Đúng. Loop forever giúp ảnh động phát vòng lặp tuần hoàn."
        },
        {
          "text": "d) Ảnh GIF động hỗ trợ tới 16.7 triệu màu sắc chân thực như ảnh chụp điện thoại cao cấp.",
          "answer": false,
          "explain": "Sai. Định dạng GIF bị giới hạn kỹ thuật tối đa chỉ 256 màu (bảng màu 8-bit Indexed)."
        }
      ]
    },
    {
      "id": "b28-tf3",
      "context": "Xét hai chế độ xử lý khung hình `(combine)` và `(replace)` trong việc tạo ảnh động GIMP.",
      "statements": [
        {
          "text": "a) Chế độ `(replace)` xóa bỏ hoàn toàn khung hình trước đó trước khi hiển thị nội dung của khung hình tiếp theo.",
          "answer": true,
          "explain": "Đúng. Đó là định nghĩa chính xác của chế độ Replace."
        },
        {
          "text": "b) Nếu tạo một nhân vật hoạt hình chạy ngang qua màn hình mà dùng chế độ `(combine)`, bóng dáng nhân vật ở các bước chạy trước vẫn sẽ lưu lại trên màn hình.",
          "answer": true,
          "explain": "Đúng. Do khung hình cũ không bị xóa nên các tư thế bước chạy cũ sẽ đè chồng lên nhau."
        },
        {
          "text": "c) Chế độ `(combine)` rất hữu ích và tiết kiệm dung lượng khi ta muốn vẽ thêm dần từng nét chữ vào một khung hình có nền tĩnh cố định.",
          "answer": true,
          "explain": "Đúng. Nền giữ nguyên, các nét chữ mới đè thêm vào từng frame rất tối ưu."
        },
        {
          "text": "d) Người dùng không thể kết hợp cả `(replace)` lẫn thông số thời gian `(ms)` trong cùng một tên lớp.",
          "answer": false,
          "explain": "Sai. Cú pháp chuẩn của GIMP cho phép viết kết hợp, ví dụ: `Frame 1 (250ms) (replace)`."
        }
      ]
    },
    {
      "id": "b28-tf4",
      "context": "Đánh giá các khâu tối ưu hóa và xuất bản tệp ảnh động GIF thành phẩm.",
      "statements": [
        {
          "text": "a) Lệnh Filters -> Animation -> Optimize (for GIF) giúp tự động phân tích và cắt giảm các vùng điểm ảnh thừa không thay đổi để giảm dung lượng file.",
          "answer": true,
          "explain": "Đúng. Đây là công cụ tối ưu hóa dung lượng GIF cực kỳ lợi hại của GIMP."
        },
        {
          "text": "b) Khi vào File -> Export As..., nếu quên không tích chọn ô 'As animation', GIMP sẽ xuất ra một tệp ảnh tĩnh không thể chuyển động.",
          "answer": true,
          "explain": "Đúng. Thiếu tùy chọn này phần mềm sẽ chỉ xuất ảnh phẳng thông thường."
        },
        {
          "text": "c) Tệp ảnh động GIF sau khi xuất ra hoàn toàn có thể kéo thả vào trình duyệt Chrome, Cốc Cốc hoặc chèn vào Slide PowerPoint để phát mượt mà.",
          "answer": true,
          "explain": "Đúng. Ảnh GIF có tính tương thích phổ quát trên mọi trình duyệt và ứng dụng văn phòng."
        },
        {
          "text": "d) Tệp ảnh GIF có thể lồng kèm bài hát dài 4 phút với định dạng âm thanh vòm Dolby Atmos.",
          "answer": false,
          "explain": "Sai. Định dạng ảnh GIF hoàn toàn không hỗ trợ kênh âm thanh (Audio track)."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b28-es1",
      "q": "Trình bày nguyên lý cơ bản để tạo ảnh động trong phần mềm GIMP. Thứ tự trình chiếu các khung hình (frames) giữa các lớp (layers) diễn ra như thế nào?",
      "answer": "- Nguyên lý cơ bản: Ảnh động được tạo thành từ một chuỗi các hình ảnh tĩnh (gọi là các khung hình - frames) hiển thị nối tiếp nhau với tốc độ nhanh, dựa trên hiện tượng lưu ảnh trên võng mạc của mắt người để tạo ra ảo giác chuyển động liên tục.\\n- Cơ chế trong GIMP: Mỗi một lớp ảnh (Layer) trong bảng quản lý Layers đóng vai trò là một khung hình riêng biệt.\\n- Thứ tự trình chiếu: Hoạt cảnh sẽ bắt đầu phát lần lượt từ lớp nằm ở vị trí dưới cùng (bottom layer) của bảng Layers, sau đó chiếu tuần tự lên các lớp nằm phía trên và kết thúc ở lớp trên cùng (top layer). Nếu thiết lập lặp vô tận (Loop), chu trình sẽ quay ngược lại từ lớp dưới cùng."
    },
    {
      "id": "b28-es2",
      "q": "Nêu quy ước đặt tên lớp (Layer) trong GIMP để chỉ định thời gian trễ hiển thị và chế độ xử lý khung hình của từng frame.",
      "answer": "Quy ước đặt tên lớp trong GIMP tuân theo cú pháp:\\n`Tên_lớp (thời_gian_ms) (chế_độ_hiển_thị)`\\n- Thời gian hiển thị: Đặt trong dấu ngoặc đơn với đơn vị là mili-giây (`ms`), ví dụ `(250ms)` tương ứng với 0.25 giây.\\n- Chế độ xử lý khung hình (Frame disposal method):\\n+ `(replace)`: Xóa bỏ hoàn toàn khung hình trước đó trước khi hiển thị khung hình hiện tại (tránh hiện tượng lưu vệt bóng ma khi đối tượng di chuyển).\\n+ `(combine)`: Giữ nguyên khung hình trước và đè chồng nội dung của khung hình hiện tại lên trên.\\n- Ví dụ hoàn chỉnh: `KhungHinh_01 (500ms) (replace)`."
    },
    {
      "id": "b28-es3",
      "q": "Phân biệt sự khác nhau giữa hai chế độ xử lý khung hình `(replace)` và `(combine)` khi tạo ảnh động GIF.",
      "answer": "- Chế độ `(replace)`:\\n+ Cơ chế: Khung hình cũ ngay lập tức bị gỡ bỏ (xóa sạch) khỏi màn hình trước khi khung hình kế tiếp được hiển thị.\\n+ Ứng dụng: Dùng khi nhân vật hoặc đối tượng thay đổi vị trí, thay đổi kích thước hoặc chuyển động qua lại trên màn hình, giúp đối tượng không bị để lại vệt bóng mờ chồng chéo ở các vị trí cũ.\\n- Chế độ `(combine)`:\\n+ Cơ chế: Khung hình mới sẽ được vẽ đè chồng lên trên nội dung của khung hình trước đó mà không xóa bỏ khung hình trước.\\n+ Ứng dụng: Dùng khi phông nền được giữ cố định và các chi tiết được vẽ thêm dần (ví dụ hiệu ứng từng chữ cái lần lượt xuất hiện hoặc kim đồng hồ quay thêm nét), giúp tối ưu hóa dung lượng tệp GIF."
    },
    {
      "id": "b28-es4",
      "q": "Nêu các bước thao tác cụ thể trong GIMP để kiểm tra trước (Preview) chuyển động và xuất bản (Export) thành tệp ảnh động GIF hoàn chỉnh.",
      "answer": "Các bước thao tác:\\n1. Xem trước hoạt cảnh (Preview):\\n- Vào thanh bảng chọn Filters -> Chọn Animation -> Chọn 'Playback...'.\\n- Trong cửa sổ hiện ra, nhấn nút Play (tam giác) để xem trước chuyển động, kiểm tra độ mượt và thời gian dừng của các khung hình.\\n2. Xuất bản tệp ảnh GIF (Export):\\n- Vào menu File -> Chọn 'Export As...'.\\n- Đặt tên tệp có phần mở rộng là `.gif` (ví dụ: `hoatcanh.gif`) và chọn thư mục lưu trữ.\\n- Nhấn nút 'Export', hộp thoại 'Export Image as GIF' sẽ xuất hiện:\\n  + Bắt buộc tích chọn ô 'As animation' (để kích hoạt tạo ảnh động).\\n  + Tích chọn ô 'Loop forever' nếu muốn ảnh lặp lại vô tận.\\n  + Cài đặt thời gian trễ mặc định (Default delay between frames) nếu các layer chưa ghi thời gian riêng.\\n  + Chọn chế độ khung hình mặc định (Frame disposal: I don't care / Combine / Replace).\\n- Nhấn nút 'Export' để hoàn tất quá trình xuất tệp."
    }
  ]
};
