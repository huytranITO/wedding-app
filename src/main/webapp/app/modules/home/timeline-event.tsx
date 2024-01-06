import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const TimeLineEvent = () => {
    return (
    <VerticalTimeline
    layout= '2-columns'
    >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="11h, Ngày 06/01/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
        >
          <span className="vertical-timeline-element-title">Lễ ăn hỏi</span>
          <br />
          <span className="vertical-timeline-element-subtitle">Nhà ông Lê Thanh Khôi</span>
          <p>
          Xóm 6, Phúc Thành, Yên Thành, Nghệ An
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="08h, Ngày 19/01/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
        >
          <span className="vertical-timeline-element-title">Lễ cưới nhà gái</span>
          <br />
          <span className="vertical-timeline-element-subtitle">08h, Ngày 19/01/2024</span>
          <p>
            Nhà ông Lê Thanh Khôi, Phúc Thành, Yên Thành, Nghệ An
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11h, Ngày 20/01/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
        >
          <span className="vertical-timeline-element-title">Lễ thành hôn</span>
          <br />
          <span className="vertical-timeline-element-subtitle">Nhà ông Phạm Hữu Từ</span>
          <p>
            Khối Phan Bội Châu, Thị Trấn Nam Đàn, Nghệ An
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11h, Ngày 20/01/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
        >
          <span className="vertical-timeline-element-title">Lễ cưới</span>
          <span className="vertical-timeline-element-subtitle"></span>
          <br />
          <span>
            Nhà hàng Ngân Trình 2, Khối Quy Chính, Thị trấn Nam Đàn, Nghệ An
          </span>
          <br /> 
        </VerticalTimelineElement>
      </VerticalTimeline>)
}