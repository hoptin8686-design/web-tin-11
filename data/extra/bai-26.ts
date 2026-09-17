import { LessonExtra } from "@/lib/types";

// Bài 26: Công cụ chọn và công cụ tinh chỉnh màu sắc (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b26-tf1",
      "context": "Nhóm học sinh thực hiện dự án thiết kế poster tuyên truyền bảo vệ môi trường. Nhóm cần tách hình ảnh chú chim bồ câu từ một bức ảnh chụp để dán sang poster mới.",
      "statements": [
        {
          "text": "a) Học sinh có thể dùng công cụ Fuzzy Select Tool (phím U) nhấp vào nền trời xanh đồng màu để chọn toàn bộ bầu trời.",
          "answer": true,
          "explain": "Đúng. Nền trời xanh có màu sắc đồng nhất là đối tượng hoàn hảo cho công cụ Fuzzy Select."
        },
        {
          "text": "b) Sau khi đã chọn được nền trời, học sinh chỉ cần nhấn phím Delete là chú chim bồ câu sẽ biến mất và nền trời được giữ lại.",
          "answer": false,
          "explain": "Sai. Nhấn Delete sẽ xóa chính vùng đang chọn (nền trời), làm lộ ra chú chim bồ câu trên nền trong suốt nếu có Alpha."
        },
        {
          "text": "c) Lệnh Đảo ngược vùng chọn Select -> Invert (Ctrl + I) giúp chuyển vùng chọn từ nền trời sang chính xác chú chim bồ câu.",
          "answer": true,
          "explain": "Đúng. Invert đảo ngược lựa chọn, từ chọn nền thành chọn đối tượng."
        },
        {
          "text": "d) Thao tác Feather Selection giúp viền lông của chú chim bồ câu mềm mại và hòa nhập tự nhiên vào poster mới.",
          "answer": true,
          "explain": "Đúng. Feather làm mềm biên tránh cảm giác vết cắt giả tạo thô cứng."
        }
      ]
    },
    {
      "id": "b26-tf2",
      "context": "Bức ảnh chụp chú chim bồ câu được chụp vào ngày trời nhiều mây u ám nên màu sắc bị tối và xỉn màu. Nhóm tiến hành chỉnh sửa màu sắc.",
      "statements": [
        {
          "text": "a) Vào menu Colors -> Brightness-Contrast cho phép học sinh kéo thanh trượt Brightness sang phải để ảnh sáng rõ hơn.",
          "answer": true,
          "explain": "Đúng. Tăng Brightness nâng mức sáng của toàn bộ điểm ảnh trên lớp."
        },
        {
          "text": "b) Kéo tăng độ tương phản (Contrast) giúp phân tách rõ ràng hơn giữa các đốm lông sáng và tối trên cánh chim.",
          "answer": true,
          "explain": "Đúng. Tương phản cao làm nổi bật sự khác biệt giữa mảng sáng và mảng tối."
        },
        {
          "text": "c) Để tăng độ rực rỡ của mắt chim và màu mỏ chim, học sinh nên giảm thông số Saturation về mức âm tối đa (-100).",
          "answer": false,
          "explain": "Sai. Giảm Saturation về -100 sẽ biến bức ảnh thành đen trắng; muốn rực rỡ hơn phải tăng Saturation lên."
        },
        {
          "text": "d) Công cụ Curves (Colors -> Curves...) cho phép uốn cong đồ thị hình chữ S nhẹ để vừa tăng độ tương phản vừa làm nổi bật chi tiết.",
          "answer": true,
          "explain": "Đúng. Đường cong chữ S (S-curve) là kỹ thuật kinh điển giúp tăng tương phản nghệ thuật cực kỳ đẹp mắt."
        }
      ]
    },
    {
      "id": "b26-tf3",
      "context": "Xét các phím tắt và chế độ kết hợp vùng chọn trong phần mềm GIMP.",
      "statements": [
        {
          "text": "a) Khi đang sử dụng công cụ chọn, nhấn giữ phím Shift sẽ xuất hiện dấu cộng nhỏ bên cạnh con trỏ chuột, cho phép cộng thêm vùng chọn mới.",
          "answer": true,
          "explain": "Đúng. Phím Shift kích hoạt chế độ Add to selection."
        },
        {
          "text": "b) Nhấn giữ phím Ctrl sẽ kích hoạt chế độ Subtract, cho phép trừ bớt diện tích khỏi vùng chọn hiện thời.",
          "answer": true,
          "explain": "Đúng. Phím Ctrl kích hoạt chế độ Subtract from selection."
        },
        {
          "text": "c) Tổ hợp phím Shift + Ctrl + A dùng để chọn toàn bộ toàn màn hình bức ảnh.",
          "answer": false,
          "explain": "Sai. Chọn toàn bộ là Ctrl + A (Select All); còn Shift + Ctrl + A là hủy bỏ vùng chọn (Select None)."
        },
        {
          "text": "d) Chỉ có thể tạo duy nhất một vùng chọn tại một thời điểm, không thể có nhiều vùng chọn rời rạc cùng tồn tại.",
          "answer": false,
          "explain": "Sai. Bằng cách giữ phím Shift, người dùng có thể tạo vô số vùng chọn rời rạc ở nhiều vị trí khác nhau trên ảnh."
        }
      ]
    },
    {
      "id": "b26-tf4",
      "context": "Đánh giá các công cụ tinh chỉnh màu sắc chuyên sâu trong menu Colors của GIMP.",
      "statements": [
        {
          "text": "a) Biểu đồ Histogram trong hộp thoại Levels biểu thị số lượng phân bố của các điểm ảnh ở các mức độ sáng từ tối nhất (0) đến sáng nhất (255).",
          "answer": true,
          "explain": "Đúng. Đó là ý nghĩa của biểu đồ tần suất sắc độ Histogram."
        },
        {
          "text": "b) Công cụ Color Balance cho phép chỉnh các thanh trượt Cyan-Red, Magenta-Green, Yellow-Blue riêng biệt cho vùng bóng tối (Shadows), trung gian (Midtones) và điểm sáng (Highlights).",
          "answer": true,
          "explain": "Đúng. Color Balance kiểm soát màu sắc phân tách theo 3 vùng sắc thái ánh sáng."
        },
        {
          "text": "c) Khi bức ảnh bị ám vàng do chụp dưới đèn sợi đốt, ta có thể kéo thanh trượt về phía màu Blue (Xanh lam) để khử bớt màu vàng.",
          "answer": true,
          "explain": "Đúng. Blue và Yellow là cặp màu đối kháng (bù nhau), thêm Blue sẽ triệt tiêu sắc vàng."
        },
        {
          "text": "d) Lệnh Desaturate chỉ có thể áp dụng cho video clip và hoàn toàn không chạy được trên ảnh tĩnh Bitmap.",
          "answer": false,
          "explain": "Sai. Desaturate là lệnh xử lý ảnh tĩnh cơ bản nhất của GIMP."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b26-es1",
      "q": "Trình bày quy trình 4 bước để tách một đối tượng ra khỏi ảnh nền bằng cách sử dụng công cụ chọn và kênh Alpha trong GIMP.",
      "answer": "Quy trình 4 bước tách đối tượng:\\n1. Chuẩn bị kênh Alpha: Nhấp chuột phải vào lớp ảnh trong bảng Layers -> Chọn 'Add Alpha Channel' (đảm bảo khi xóa nền sẽ tạo ra độ trong suốt).\\n2. Tạo vùng chọn nền: Dùng công cụ chọn thích hợp (như Fuzzy Select nếu nền cùng màu, hoặc Scissors Select / Free Select bao quanh đối tượng).\\n3. Đảo ngược và kiểm tra vùng chọn: Nếu chọn nền, vào Select -> Invert (Ctrl + I) để chuyển sang chọn đối tượng. Vào Select -> Feather... đặt khoảng 2-3px để làm mềm biên.\\n4. Tách đối tượng: Nhấn Ctrl + C để sao chép đối tượng, sau đó nhấn Edit -> Paste as -> New Layer (hoặc dán sang một tệp hình ảnh mới) để hoàn tất việc tách nền."
    },
    {
      "id": "b26-es2",
      "q": "Phân tích sự khác nhau giữa công cụ Brightness-Contrast và công cụ Levels trong việc hiệu chỉnh ánh sáng của bức ảnh.",
      "answer": "- Brightness-Contrast: Tác động đồng đều lên toàn bộ dải sắc độ của bức ảnh một cách tuyến tính. Khi tăng độ sáng, cả vùng tối lẫn vùng sáng đều bị đẩy lên, dễ làm cháy sáng các vùng vốn đã sáng hoặc làm bợt bạc màu sắc.\\n- Levels: Cung cấp biểu đồ Histogram trực quan thể hiện sự phân bổ điểm ảnh từ đen đến trắng và cho phép người dùng kiểm soát độc lập 3 điểm mốc: Shadows (vùng tối), Midtones (vùng trung gian) và Highlights (vùng sáng). Nhờ đó, người dùng có thể làm sáng khuôn mặt ở vùng Midtones mà không hề làm cháy sáng bầu trời ở vùng Highlights, giữ trọn vẹn chi tiết ảnh."
    },
    {
      "id": "b26-es3",
      "q": "Nêu ý nghĩa của thông số Độ bão hòa màu (Saturation) và mô tả kết quả thị giác khi điều chỉnh thông số này ở hai thái cực: tăng tối đa (+100) và giảm tối thiểu (-100).",
      "answer": "- Ý nghĩa: Độ bão hòa màu (Saturation) thể hiện độ tinh khiết, đậm đà và rực rỡ của các màu sắc trong bức ảnh so với ánh sáng trắng.\\n- Kết quả thị giác:\\n+ Khi giảm tối thiểu (-100): Bức ảnh bị tước bỏ hoàn toàn sắc tố màu, trở thành ảnh thang xám (đen trắng / Grayscale) thuần túy.\\n+ Khi tăng tối đa (+100): Màu sắc trở nên cực kỳ sặc sỡ, chói lòa và rực rỡ ở mức gắt, có thể dẫn đến hiện tượng bết màu và mất chi tiết tự nhiên."
    },
    {
      "id": "b26-es4",
      "q": "Tính năng Feather Selection (làm mềm biên vùng chọn) có tác dụng gì trong việc ghép ảnh? Điều gì sẽ xảy ra nếu ghép ảnh mà không sử dụng tính năng này?",
      "answer": "- Tác dụng: Feather Selection tạo ra một dải chuyển tiếp mờ nhòe dần theo bán kính pixel định sẵn ở mép vùng chọn, giúp các điểm ảnh ở đường viền đối tượng hòa trộn từ từ và êm ái vào các điểm ảnh của phông nền mới.\\n- Nếu không sử dụng: Đường viền đối tượng sau khi cắt sẽ rất sắc nhọn, lộ rõ các bậc thang răng cưa (aliasing) thô ráp, tạo cảm giác đối tượng bị cắt dán cơ học vụng về, thiếu tự nhiên và trông như một bức ảnh giả."
    }
  ]
};
