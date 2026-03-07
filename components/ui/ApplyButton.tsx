'use client';

import { useState } from 'react';
import { NeonButton } from './NeonButton';
import { ApplicationModal } from './ApplicationModal';

interface ApplyButtonProps {
    jobId: string;
    jobTitle: string;
    className?: string;
    text?: string;
}

export function ApplyButton({ jobId, jobTitle, className = '', text = 'Apply Now' }: ApplyButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <NeonButton variant="cyan" className={className} onClick={() => setIsModalOpen(true)}>
                {text}
            </NeonButton>
            <ApplicationModal
                jobId={jobId}
                jobTitle={jobTitle}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
