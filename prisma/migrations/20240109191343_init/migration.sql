-- AlterTable
ALTER TABLE `Meetings` ADD COLUMN `reserved` VARCHAR(191) NOT NULL DEFAULT 'false',
    MODIFY `startDate` VARCHAR(191) NOT NULL,
    MODIFY `endDate` VARCHAR(191) NOT NULL;
