import { LessonExtra } from "@/lib/types";

// Bài 25: Phần mềm chỉnh sửa ảnh (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b25-tf1",
      "context": "Bạn Hà học sinh lớp 11 bắt đầu làm quen với phần mềm GIMP để chỉnh sửa ảnh thẻ chuẩn bị nộp hồ sơ. Hà tìm hiểu các tính năng cơ bản của phần mềm.",
      "statements": [
        {
          "text": "a) GIMP là phần mềm xử lý đồ họa Bitmap mã nguồn mở miễn phí, hỗ trợ làm việc với các lớp ảnh (layers).",
          "answer": true,
          "explain": "Đúng. Đây là đặc điểm nổi bật nhất của GIMP trong hệ sinh thái phần mềm mã nguồn mở."
        },
        {
          "text": "b) Hà có thể dùng phím tắt Ctrl + S để xuất thẳng ảnh ra định dạng JPG nộp cho thầy cô.",
          "answer": false,
          "explain": "Sai. Lệnh Ctrl + S chỉ lưu tệp dự án .xcf của GIMP; muốn xuất ra JPG phải dùng File -> Export As..."
        },
        {
          "text": "c) Độ phân giải ảnh càng cao (chỉ số DPI lớn) thì dung lượng tệp càng nặng nhưng khi in ra sẽ càng mịn và rõ nét.",
          "answer": true,
          "explain": "Đúng. DPI lớn đồng nghĩa với mật độ điểm ảnh dày đặc giúp bản in không bị vỡ hạt."
        },
        {
          "text": "d) GIMP chỉ có thể chạy được trên hệ điều hành Linux và không thể cài đặt trên Windows 11.",
          "answer": false,
          "explain": "Sai. GIMP là phần mềm đa nền tảng, chạy mượt mà trên Windows, macOS và Linux."
        }
      ]
    },
    {
      "id": "b25-tf2",
      "context": "Hà thực hiện chỉnh sửa ảnh chân dung: thay đổi kích thước và cắt bỏ các phần hậu cảnh lộn xộn phía sau lưng.",
      "statements": [
        {
          "text": "a) Hà sử dụng công cụ Crop Tool (Shift + C) để kéo chọn vùng khuôn mặt cân đối và nhấn Enter để cắt xén viền ảnh thừa.",
          "answer": true,
          "explain": "Đúng. Crop Tool là công cụ chuyên dụng để cắt tỉa khung hình ảnh."
        },
        {
          "text": "b) Khi muốn phóng to hoặc thu nhỏ ảnh về kích thước chuẩn 3x4 cm, Hà chọn công cụ Scale Tool (Shift + S) hoặc lệnh Image -> Scale Image...",
          "answer": true,
          "explain": "Đúng. Scale Image cho phép chỉ định chính xác kích thước pixel hoặc cm theo yêu cầu."
        },
        {
          "text": "c) Thao tác cắt xén ảnh Crop Tool sẽ làm tăng gấp đôi độ phân giải quang học của bức ảnh.",
          "answer": false,
          "explain": "Sai. Cắt xén chỉ loại bỏ phần pixel nằm ngoài vùng chọn, không làm tăng độ phân giải của cảm biến ban đầu."
        },
        {
          "text": "d) Nếu lỡ cắt nhầm mất một phần tóc, Hà có thể nhấn tổ hợp phím Ctrl + Z để hủy bỏ thao tác cắt vừa làm.",
          "answer": true,
          "explain": "Đúng. Ctrl + Z hoàn tác thao tác tức thời rất an toàn và tiện lợi."
        }
      ]
    },
    {
      "id": "b25-tf3",
      "context": "Xét khái niệm Lớp ảnh (Layer) và bảng điều khiển Layers trong không gian làm việc của GIMP.",
      "statements": [
        {
          "text": "a) Các lớp ảnh trong GIMP giống như các tấm kính trong suốt xếp chồng lên nhau theo thứ tự từ dưới lên trên.",
          "answer": true,
          "explain": "Đúng. Mô hình lớp kính trong suốt là nguyên lý cốt lõi của mọi phần mềm đồ họa hiện đại."
        },
        {
          "text": "b) Khi vẽ hoặc tẩy xóa trên lớp ảnh phía trên, mọi nét vẽ chắc chắn sẽ ăn sâu và làm hỏng vĩnh viễn nội dung của các lớp nằm phía dưới.",
          "answer": false,
          "explain": "Sai. Các lớp độc lập hoàn toàn với nhau, thao tác trên lớp này không làm ảnh hưởng nội dung lớp khác."
        },
        {
          "text": "c) Biểu tượng hình con mắt cho phép người dùng tạm thời ẩn một lớp để dễ quan sát các chi tiết nằm ở lớp dưới.",
          "answer": true,
          "explain": "Đúng. Nhấp tắt con mắt sẽ ẩn lớp tạm thời mà không hề làm mất dữ liệu."
        },
        {
          "text": "d) Thanh trượt Opacity bằng 0% nghĩa là lớp ảnh đó hiển thị rõ nét và đậm đặc nhất.",
          "answer": false,
          "explain": "Sai. Opacity 0% nghĩa là lớp ảnh hoàn toàn trong suốt (tàng hình); 100% mới là đậm đặc nhất."
        }
      ]
    },
    {
      "id": "b25-tf4",
      "context": "Hà chuẩn bị xuất sản phẩm ảnh đã chỉnh sửa để đưa lên trang web của trường và in ảnh giấy.",
      "statements": [
        {
          "text": "a) Hà nên xuất ảnh sang định dạng PNG nếu muốn giữ phần phông nền phía sau trong suốt để chèn vào phông nền sân khấu web.",
          "answer": true,
          "explain": "Đúng. Định dạng PNG hỗ trợ kênh Alpha trong suốt rất hoàn hảo."
        },
        {
          "text": "b) Định dạng JPEG có ưu điểm là dung lượng file nhỏ gọn, rất phù hợp cho việc tải ảnh chân dung lên web và mạng xã hội.",
          "answer": true,
          "explain": "Đúng. Thuật toán nén của JPEG giúp giảm tối đa dung lượng tệp mà vẫn đảm bảo độ nét thị giác."
        },
        {
          "text": "c) Khi đóng phần mềm GIMP, chỉ cần lưu file ảnh JPG là đủ, việc lưu tệp dự án .xcf là hoàn toàn vô ích và lãng phí ổ đĩa.",
          "answer": false,
          "explain": "Sai. File .xcf lưu toàn bộ các layer và lịch sử; nếu không lưu .xcf thì sau này không thể tách rời các đối tượng để sửa tiếp."
        },
        {
          "text": "d) Thêm kênh Alpha (Layer -> Transparency -> Add Alpha Channel) là bước cần thiết để có thể xóa phông ảnh thành trong suốt.",
          "answer": true,
          "explain": "Đúng. Nếu thiếu kênh Alpha, vùng tẩy xóa sẽ bị lấp đầy bằng màu nền Background thay vì trong suốt."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b25-es1",
      "q": "Trình bày sự khác biệt cơ bản giữa việc Lưu tệp dự án (Save - .xcf) và Xuất tệp hình ảnh (Export As... - .jpg/.png) trong phần mềm GIMP.",
      "answer": "- Lưu tệp dự án (File -> Save): Tạo ra tệp có phần mở rộng mặc định là `.xcf`. Tệp này lưu giữ nguyên vẹn cấu trúc đa tầng (các layer), kênh trong suốt (Alpha), văn bản còn khả năng chỉnh sửa và vùng chọn. Mục đích để phục vụ cho việc mở lại và tiếp tục chỉnh sửa chuyên sâu sau này.\\n- Xuất tệp hình ảnh (File -> Export As...): Tạo ra các tệp hình ảnh thông dụng như `.jpg`, `.png`, `.gif`. Quá trình này sẽ gộp phẳng toàn bộ các lớp lại thành một bức ảnh duy nhất để chia sẻ, gửi qua mạng xã hội hoặc chèn vào trang web."
    },
    {
      "id": "b25-es2",
      "q": "Khái niệm 'Lớp ảnh' (Layer) là gì? Nêu 3 lợi ích thiết thực của việc sử dụng các lớp ảnh độc lập khi thiết kế đồ họa.",
      "answer": "- Khái niệm: Lớp ảnh (Layer) là một mặt phẳng đồ họa độc lập, có thể hình dung như một tấm kính trong suốt xếp chồng lên nhau theo thứ tự để tạo nên bức ảnh hoàn chỉnh tổng thể.\\n- Ba lợi ích thiết thực:\\n1. Tính độc lập: Có thể chỉnh sửa, di chuyển, xóa hoặc biến đổi một đối tượng ở một lớp mà hoàn toàn không ảnh hưởng đến các đối tượng ở lớp khác.\\n2. Dễ dàng thử nghiệm hiệu ứng: Cho phép ẩn/hiện, điều chỉnh độ mờ đục (Opacity) hoặc thay đổi chế độ hòa trộn của từng thành phần để so sánh kết quả.\\n3. Quản lý bố cục linh hoạt: Có thể dễ dàng thay đổi thứ tự xếp chồng trước/sau của các đối tượng đồ họa chỉ bằng thao tác kéo thả trong bảng điều khiển Layers."
    },
    {
      "id": "b25-es3",
      "q": "Giải thích vai trò của Kênh Alpha (Alpha Channel) trong một lớp ảnh và nêu hiện tượng xảy ra khi xóa đối tượng trên một lớp chưa được thêm kênh Alpha.",
      "answer": "- Vai trò: Kênh Alpha là kênh thông tin chuyên dụng lưu trữ giá trị về độ trong suốt (Transparency) của từng điểm ảnh trên một lớp. Nó cho phép các điểm ảnh bị xóa trở nên hoàn toàn trong suốt hoặc bán trong suốt, giúp nhìn xuyên thấu xuống nội dung của các lớp ảnh nằm phía dưới.\\n- Hiện tượng: Nếu một lớp chưa được thêm kênh Alpha (Add Alpha Channel), khi dùng công cụ Eraser hoặc phím Delete để xóa một vùng, vùng đó sẽ không trở nên trong suốt mà sẽ bị lấp đầy bằng màu nền hiện tại (Background Color) của phần mềm."
    },
    {
      "id": "b25-es4",
      "q": "Nêu sự khác nhau giữa hai định dạng ảnh thông dụng JPEG (.jpg) và PNG (.png). Trong trường hợp nào thì bắt buộc nên chọn định dạng PNG?",
      "answer": "- JPEG (.jpg): Là định dạng nén mất mát dữ liệu (lossy), tạo ra kích thước tệp rất nhẹ nhưng không hỗ trợ nền trong suốt (vùng trống luôn bị chuyển thành màu trắng hoặc màu nền).\\n- PNG (.png): Là định dạng nén bảo toàn dữ liệu (lossless), giữ nguyên độ sắc nét tuyệt đối của các chi tiết, đường viền văn bản và hỗ trợ đầy đủ kênh trong suốt (Alpha Transparency) với kích thước tệp lớn hơn JPEG.\\n- Bắt buộc chọn PNG khi: Cần tạo ảnh logo, biểu tượng, hình vẽ đồ họa hoặc ảnh nhân vật đã được tách phông nền trong suốt để chèn lồng lên các nền khác mà không bị lộ khung chữ nhật màu trắng bao quanh."
    }
  ]
};
